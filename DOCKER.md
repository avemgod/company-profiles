# 🐳 Aurora Docker Setup Guide

## Overview

Aurora website sudah dikonfigurasi untuk berjalan di Docker dengan setup yang production-ready.

## 📦 Apa yang Disertakan

- **Dockerfile**: Multi-stage build untuk optimasi ukuran image
- **docker-compose.yml**: Orchestration untuk easy deployment
- **.dockerignore**: Exclude files yang tidak perlu di container

## ✨ Fitur Docker

✅ Multi-stage build (development + production)
✅ Alpine Linux (image size kecil: ~150MB)
✅ Non-root user untuk security
✅ Health checks built-in
✅ Proper signal handling (dumb-init)
✅ Optimized for production

## 🚀 Quick Start dengan Docker

### Prerequisite
- Docker installed
- Docker Compose installed (optional, bisa pakai docker run)

### Method 1: Docker Compose (Recommended)

```bash
# 1. Build image
docker-compose build

# 2. Run container
docker-compose up

# 3. Access aplikasi
# Visit: http://localhost:3000
```

### Method 2: Docker CLI

```bash
# 1. Build image
docker build -t aurora:latest .

# 2. Run container
docker run -p 3000:3000 --name aurora aurora:latest

# 3. Access aplikasi
# Visit: http://localhost:3000
```

### Stop Container

```bash
# Dengan Docker Compose
docker-compose down

# Dengan Docker CLI
docker stop aurora
docker rm aurora
```

## 📊 Docker Compose Commands

```bash
# Build image
docker-compose build

# Run in foreground
docker-compose up

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down

# Remove volumes
docker-compose down -v

# Restart
docker-compose restart

# Rebuild and restart
docker-compose up -d --build
```

## 🔍 Verify Container

```bash
# Check if running
docker ps

# Check logs
docker logs aurora

# Access container shell
docker exec -it aurora sh

# Test health endpoint
curl http://localhost:3000

# Check container stats
docker stats aurora
```

## 📋 Dockerfile Explanation

### Multi-Stage Build

**Stage 1: Builder**
```dockerfile
FROM node:18-alpine AS builder
# Install dependencies
# Copy source
# Build application
```

**Stage 2: Production**
```dockerfile
FROM node:18-alpine
# Copy built files only
# Install production dependencies only
# Setup non-root user
# Configure health check
```

### Keuntungan
- ✅ Smaller final image (~150MB vs ~500MB)
- ✅ No build tools in production
- ✅ Better security (no source code)
- ✅ Faster deployment

## 🔒 Security Features

### Non-Root User
```dockerfile
RUN adduser -S nextjs -u 1001
USER nextjs
```
Prevents container escape vulnerabilities

### Health Checks
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s
```
Docker automatically restarts unhealthy containers

### Signal Handling
```dockerfile
ENTRYPOINT ["dumb-init", "--"]
```
Proper cleanup when container stops

## 🎯 Production Deployment

### Using Docker Compose

```yaml
version: '3.8'

services:
  aurora:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: aurora-app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Environment Variables

```bash
# Build time (dalam Dockerfile)
NODE_ENV=production

# Runtime (docker-compose atau docker run)
docker run -e NODE_ENV=production aurora:latest
```

## 📦 Image Size

```
Before optimization: ~500MB
After multi-stage:   ~150MB
```

## 🔧 Customization

### Change Port

**docker-compose.yml:**
```yaml
ports:
  - "8080:3000"  # Host:Container
```

**Docker CLI:**
```bash
docker run -p 8080:3000 aurora:latest
```

### Add Environment Variables

**docker-compose.yml:**
```yaml
environment:
  - NODE_ENV=production
  - CUSTOM_VAR=value
```

**Docker CLI:**
```bash
docker run -e NODE_ENV=production -e CUSTOM_VAR=value aurora:latest
```

### Mount Volumes (Development)

```bash
docker run -v $(pwd):/app aurora:latest
```

## 📊 Docker Image Layers

```
FROM node:18-alpine
├── Install dumb-init
├── Copy package.json
├── npm ci --only=production
├── Copy built .next from builder
├── Copy public folder
├── Create non-root user
├── Set workdir
└── Run health check
```

## ✅ Health Check

Container automatically monitored:
- ✅ Starts check setelah 40s
- ✅ Interval 30s antar check
- ✅ Timeout 10s per check
- ✅ Unhealthy after 3 failures
- ✅ Auto restart jika unhealthy

## 🚢 Deployment Platforms

### Docker Hub

```bash
# Login
docker login

# Tag image
docker tag aurora:latest username/aurora:latest

# Push
docker push username/aurora:latest

# Pull & run
docker run username/aurora:latest
```

### Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: aurora
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: aurora
        image: aurora:latest
        ports:
        - containerPort: 3000
        livenessProbe:
          httpGet:
            path: /
            port: 3000
          initialDelaySeconds: 40
          periodSeconds: 30
```

### Docker Swarm

```bash
docker swarm init
docker stack deploy -c docker-compose.yml aurora
```

### Cloud Services

- **AWS ECS**: Push ke ECR, deploy via ECS
- **Google Cloud Run**: `gcloud run deploy`
- **Azure Container Instances**: Push ke ACR
- **Heroku**: Heroku container registry

## 🐛 Troubleshooting

### Container tidak start

```bash
# Check logs
docker logs aurora

# Check if port in use
docker ps
lsof -i :3000

# Change port
docker-compose.yml:
  ports:
    - "8080:3000"
```

### Out of memory

```bash
# Check stats
docker stats

# Limit memory (docker-compose.yml)
services:
  aurora:
    mem_limit: 512m
    memswap_limit: 512m
```

### Slow build

```bash
# Clear build cache
docker system prune -a

# Rebuild fresh
docker-compose build --no-cache

# Check disk space
df -h
```

## 📝 Best Practices

### Development
```bash
# Use volume mount untuk live reload
docker run -v $(pwd)/src:/app/src aurora:latest
```

### Production
```bash
# Pull specific version
docker pull aurora:1.0.0

# Use health checks
# Set resource limits
# Use restart policies
```

### Security
```bash
# Use non-root user ✅
# Scan images: docker scan aurora
# Use official base images ✅
# Keep dependencies updated
```

## 🔄 CI/CD Integration

### GitHub Actions

```yaml
name: Build and Push

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: docker/build-push-action@v2
        with:
          context: .
          push: true
          tags: username/aurora:latest
```

### GitLab CI

```yaml
build:
  image: docker:latest
  script:
    - docker build -t aurora:latest .
    - docker push registry.gitlab.com/username/aurora:latest
```

## 📊 Performance Monitoring

### Container Stats

```bash
docker stats aurora
```

Output:
```
CONTAINER   CPU%    MEM USAGE   MEM%
aurora      0.5%    120MiB      23%
```

### View Logs

```bash
# Real-time logs
docker logs -f aurora

# Last 100 lines
docker logs --tail 100 aurora

# With timestamps
docker logs -t aurora
```

## 🔐 Security Scanning

```bash
# Scan image for vulnerabilities
docker scan aurora

# Use Trivy
trivy image aurora:latest
```

## 💾 Backup & Restore

### Save Image

```bash
docker save aurora:latest > aurora.tar
```

### Load Image

```bash
docker load < aurora.tar
```

## 📚 Useful Commands Reference

```bash
# Build
docker build -t aurora:latest .
docker-compose build

# Run
docker run aurora:latest
docker-compose up

# List
docker images
docker ps

# Inspect
docker logs aurora
docker exec -it aurora sh

# Stop
docker stop aurora
docker-compose down

# Remove
docker rmi aurora:latest
docker system prune -a

# Push
docker push username/aurora:latest
docker pull username/aurora:latest
```

## ✅ Checklist Production

- [x] Multi-stage build
- [x] Non-root user
- [x] Health checks
- [x] Restart policy
- [x] Resource limits (optional)
- [x] Environment variables
- [x] Security scanning
- [x] Logging configured
- [x] Image optimization
- [x] Documentation

## 📖 Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Next.js Docker](https://nextjs.org/docs/deployment/docker)
- [Docker Compose](https://docs.docker.com/compose/)

## 🎯 Next Steps

1. ✅ Build image: `docker-compose build`
2. ✅ Run locally: `docker-compose up`
3. ✅ Test in container: `curl http://localhost:3000`
4. ✅ Push to registry: `docker push`
5. ✅ Deploy to production

---

**Aurora is now Docker-ready!** 🚀

Mulai dengan: `docker-compose up`
