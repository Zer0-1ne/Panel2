#!/bin/bash

# Check if server ID is provided
if [ -z "$1" ]; then
    echo "Error: Server ID is missing."
    exit 1
fi

# Check if Docker image exists
if [[ "$(docker images -q $IMAGE_NAME 2> /dev/null)" == "" ]]; then
    echo "Error: Docker image $IMAGE_NAME not found."
    exit 1
fi

# Start Docker container
docker run -d \
--name $CONTAINER_NAME \
-p $GAME_SERVER_PORT:$GAME_SERVER_PORT \
$IMAGE_NAME

echo "Started Docker container $CONTAINER_NAME for server $1."
