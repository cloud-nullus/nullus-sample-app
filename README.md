# Nullus CI/CD Demo Sample App

A fullstack demo application showcasing the [Nullus](https://github.com/cloud-nullus/draft) DevSecOps platform. Built for CI/CD pipeline demonstrations with Kubernetes deployment.

## Project Structure

```
nullus-sample-app/
├── backend/          Go API server (net/http)
│   ├── main.go
│   ├── main_test.go
│   └── Dockerfile
├── frontend/         React SPA (Vite + Tailwind CSS 4)
│   ├── src/
│   │   ├── sections/   6 landing page sections
│   │   ├── hooks/      Custom fetch hook
│   │   ├── App.tsx
│   │   └── index.css
│   ├── nginx.conf
│   └── Dockerfile
├── k8s/              Kubernetes manifests
│   ├── namespace.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
└── README.md
```

## Local Development

### Backend

```bash
cd backend
go run .
```

The API server starts on `http://localhost:8080`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The dev server starts on `http://localhost:5173` with API proxy to `:8080`.

### Run Both

```bash
cd backend && go run . &
cd frontend && npm run dev
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/v1/health` | Health check (K8s probes) |
| `GET` | `/api/v1/info` | Build version, Go version, namespace, pod name |
| `GET` | `/api/v1/features` | Nullus platform feature list |

## Docker Build

```bash
docker build -t nullus-sample-backend backend/
docker build -t nullus-sample-frontend frontend/

docker build --build-arg VERSION=v1.0.0 --build-arg BUILD_TIME="$(date -u +%Y-%m-%dT%H:%M:%SZ)" -t nullus-sample-backend backend/
```

### Run with Docker

```bash
docker network create nullus-net

docker run -d --name nullus-sample-backend --network nullus-net -p 8080:8080 nullus-sample-backend
docker run -d --name nullus-sample-frontend --network nullus-net -p 3000:80 nullus-sample-frontend

open http://localhost:3000
```

## Kubernetes Deployment

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/

kubectl port-forward -n nullus-sample svc/nullus-sample-frontend 3000:80
open http://localhost:3000
```

## Tech Stack

- **Backend**: Go 1.26 (`net/http`), no external frameworks
- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS 4
- **Containers**: Multi-stage Docker builds (alpine base)
- **Orchestration**: Kubernetes Deployment + Service
