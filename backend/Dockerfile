# Build stage
FROM golang:1.26-alpine AS builder
WORKDIR /app
COPY go.mod ./
RUN go mod download
COPY . .
ARG VERSION=dev
ARG BUILD_TIME=unknown
RUN CGO_ENABLED=0 go build -ldflags="-w -s -X main.Version=${VERSION} -X main.BuildTime=${BUILD_TIME}" -o server .

# Runtime stage
FROM alpine:3.21
RUN apk --no-cache add ca-certificates
COPY --from=builder /app/server /server
EXPOSE 8080
ENTRYPOINT ["/server"]
