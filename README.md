# node-server-blank
Node Server

# Build Image
docker build -t node-server-kube .

# Run Image
docker run --name node-server-kube-container -p 8080:8080 -d node-server-kube

# Access Node
curl localhost:8080

# Connect to Container (Bash)
docker exec -it node-server-kube-container bash

# Stop Container
docker stop node-server-kube-container

# Remove Container
docker rm node-server-kube-container

# Tag Container
docker tag node-server-kube christofersonchua/node-server-kube:latest

# Push Container
docker push christofersonchua/node-server-kube:latest
