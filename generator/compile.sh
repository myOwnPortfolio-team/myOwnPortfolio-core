rm -rf ./dist
mkdir ./dist
docker build -t macbootglass/compilator ./generator > /dev/null
docker run --name=generator --volume=$(pwd):/root/project macbootglass/compilator > /dev/null
