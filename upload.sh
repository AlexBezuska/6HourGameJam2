mkdir html
# mkdir html/fonts html/audio html/images
rsync -avP game.js html/game.js
rsync -avP splat-3.0.2.min.js html/splat-3.0.2.min.js
rsync -avP  index.html html/index.html
#rsync -avP  fonts/* html/fonts/
# rsync -avP  audio/* html/audio/
# rsync -avP  images/* html/images/
rsync -avP ./html/* ivy:/ivy/twoscoop/alex/6hourgamejam/
echo -e "\a"
