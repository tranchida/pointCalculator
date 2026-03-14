# Build stage
FROM golang:1.24-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o pointCalculator main.go

# Run stage
FROM alpine:3.21
WORKDIR /app
COPY --from=builder /app/pointCalculator .
EXPOSE 8080
CMD ["./pointCalculator"]
