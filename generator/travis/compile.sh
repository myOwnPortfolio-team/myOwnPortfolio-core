rm -rf ./dist
mkdir ./dist
docker build -t macbootglass_compile_porfolio ./generator/compile > /dev/null
docker run --name=compilePortofolio --volume=$(pwd):/root/project macbootglass_compile_porfolio > /dev/null
