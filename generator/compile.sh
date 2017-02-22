docker build -t macbootglass/env ./generator
docker run --name=generator --volume=/Users/ttheologien/Projets/myOwnPortfolio:/root/project macbootglass/env 
