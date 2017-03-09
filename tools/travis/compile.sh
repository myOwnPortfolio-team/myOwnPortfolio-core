rm -rf ./dist
mkdir ./dist
docker build -t macbootglass/compile_portfolio ./tools/Dockerfile/compile > /dev/null
docker run --name=compile_portfolio --volume=$(pwd):/root/project macbootglass/compile_portfolio > /dev/null
