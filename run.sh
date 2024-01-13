docker container stop canvas-blocks && docker container remove canvas-blocks
docker container stop portfolio && docker container remove portfolio
docker container stop traefik && docker container remove traefik

docker-compose up -d
