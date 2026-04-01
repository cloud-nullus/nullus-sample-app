package main

import (
	"context"
	"encoding/json"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"runtime"
	"syscall"
	"time"
)

var (
	Version   = "dev"
	BuildTime = "unknown"
)

type feature struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Icon        string `json:"icon"`
}

var features = []feature{
	{ID: "stack-install", Title: "Stack Install Wizard", Description: "Deploy GitLab, ArgoCD, Prometheus to Kubernetes with a 5-step no-code wizard.", Icon: "layers"},
	{ID: "cicd-pipeline", Title: "CI/CD Pipeline", Description: "Create and manage deployment pipelines with web, API, and batch templates.", Icon: "git-branch"},
	{ID: "monitoring", Title: "Real-time Monitoring", Description: "Unified dashboard for cluster health, pipeline status, and application metrics.", Icon: "activity"},
	{ID: "golden-path", Title: "Golden Path Templates", Description: "Validated tool combinations: GitLab All-in-One, GitLab + Argo CD, GitHub + Argo CD.", Icon: "book-open"},
	{ID: "helm-orchestrator", Title: "Helm Orchestrator", Description: "3-Phase DAG-based Helm SDK installation with rollback and live log streaming.", Icon: "package"},
	{ID: "rbac", Title: "RBAC & Auth", Description: "Role-based access control for Admin, DevOps, and Developer roles via Keycloak OIDC.", Icon: "shield"},
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	mux := newMux()
	srv := &http.Server{
		Addr:         ":" + port,
		Handler:      corsMiddleware(mux),
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			slog.Error("server error", "err", err)
		}
	}()

	slog.Info("server started", "port", port, "version", Version)
	<-ctx.Done()

	shutdownCtx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := srv.Shutdown(shutdownCtx); err != nil {
		slog.Error("shutdown error", "err", err)
	}
}

func newMux() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}
		writeJSON(w, http.StatusOK, map[string]string{"service": "nullus-sample-app-backend"})
	})

	mux.HandleFunc("/api/v1/health", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}

		writeJSON(w, http.StatusOK, map[string]string{
			"status":    "ok",
			"timestamp": time.Now().UTC().Format(time.RFC3339),
		})
	})

	mux.HandleFunc("/api/v1/info", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}

		namespace := os.Getenv("POD_NAMESPACE")
		if namespace == "" {
			namespace = "local"
		}

		podName := os.Getenv("POD_NAME")
		if podName == "" {
			hostname, err := os.Hostname()
			if err != nil {
				podName = "unknown"
			} else {
				podName = hostname
			}
		}

		writeJSON(w, http.StatusOK, map[string]string{
			"version":   Version,
			"buildTime": BuildTime,
			"goVersion": runtime.Version(),
			"namespace": namespace,
			"podName":   podName,
		})
	})

	mux.HandleFunc("/api/v1/features", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}

		writeJSON(w, http.StatusOK, features)
	})

	return mux
}

func writeJSON(w http.ResponseWriter, statusCode int, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	_ = json.NewEncoder(w).Encode(v)
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}
