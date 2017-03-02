cd dist
git init
git config user.name "MacBootglass"
git config user.email "thibault.theologien@insa-rouen.fr"
git add .
git commit -m "Deployed with Travis and from myOwnPortfolio"
git push -fq --set-upstream "https://${GH_TOKEN}@${GH_REF}" master
