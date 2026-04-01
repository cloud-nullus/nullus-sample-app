package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func setupRouter() http.Handler {
	return corsMiddleware(newMux())
}

func TestHealthEndpoint(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/v1/health", nil)
	rr := httptest.NewRecorder()

	setupRouter().ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("expected %d, got %d", http.StatusOK, rr.Code)
	}

	if !strings.Contains(rr.Body.String(), `"status":"ok"`) {
		t.Fatalf("expected status ok in body, got %s", rr.Body.String())
	}
}

func TestInfoEndpoint(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/v1/info", nil)
	rr := httptest.NewRecorder()

	setupRouter().ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("expected %d, got %d", http.StatusOK, rr.Code)
	}

	if !strings.Contains(rr.Body.String(), `"version"`) {
		t.Fatalf("expected version field in body, got %s", rr.Body.String())
	}
}

func TestFeaturesEndpoint(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/v1/features", nil)
	rr := httptest.NewRecorder()

	setupRouter().ServeHTTP(rr, req)

	if rr.Code != http.StatusOK {
		t.Fatalf("expected %d, got %d", http.StatusOK, rr.Code)
	}

	var got []feature
	if err := json.Unmarshal(rr.Body.Bytes(), &got); err != nil {
		t.Fatalf("failed to parse features JSON: %v", err)
	}

	if len(got) < 5 {
		t.Fatalf("expected at least 5 features, got %d", len(got))
	}
}

func TestCORS(t *testing.T) {
	req := httptest.NewRequest(http.MethodOptions, "/api/v1/health", nil)
	rr := httptest.NewRecorder()

	setupRouter().ServeHTTP(rr, req)

	if rr.Code != http.StatusNoContent {
		t.Fatalf("expected %d, got %d", http.StatusNoContent, rr.Code)
	}

	if rr.Header().Get("Access-Control-Allow-Origin") != "*" {
		t.Fatalf("expected Access-Control-Allow-Origin to be *, got %q", rr.Header().Get("Access-Control-Allow-Origin"))
	}
}
