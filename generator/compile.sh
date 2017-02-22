docker build -t macbootglass/env ./generator > /dev/null
docker run --name=generator --volume=${TRAVIS_BUILD_DIR}:/root/project macbootglass/env
