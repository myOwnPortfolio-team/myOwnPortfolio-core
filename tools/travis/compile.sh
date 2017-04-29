rm -rf ./dist
mkdir ./dist
docker run --name=compile_myownportfolio --volume=$(pwd):/root/project -it macbootglass/myownportfolio bash compile.sh > /dev/null
