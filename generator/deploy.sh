cd dist
ls -al
git init
ls -al

git config user.name "MacBootglass"
git config user.email "thibault.theologien@insa-rouen.fr"
git add .
git commit -m "Deploy"
git push -fq "https://${GH_TOKEN}@${GH_REF}"
