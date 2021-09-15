# rhklite.github.io
portfolio

- do not add the assets to lfs, it won't render properly on the webpage.
- there is are some manual changes made to the [`main.bundle.css`](dist/css/main.bundle.css). Please keep it to avoid missing/bad assets.
- view [`index.html`](dist/index.html) locally in the browser 

## Useful Commands

- [Video compression; higher -crf number is more loss](https://unix.stackexchange.com/questions/28803/how-can-i-reduce-a-videos-size-with-ffmpeg) `ffmpeg -i input.mp4 -vcodec libx264 -crf 28 output.mp4`
- [Video to gif](https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality) `ffmpeg -i drl_cover.mp4 -vf "fps=20,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" drl_cover.gif`
- Ignore large files using `bash ignore_git.sh`

## Keyword Tags
- The tags should be organized as hard-skills, soft skills
- The keyword tags should incidate **hard skills** and **soft skills** used in that job.
- [RAL Keywords](https://www.ieee-ras.org/publications/ra-l/ra-letters-information-for-authors/184-publications/ra-letters/629-ra-l-keywords#subject)

## TODO

- [ ] close drop down menu when clicking on blank space
- [ ] show drop down menu when resized window on non-mobile site
- [ ] reveal nav bar when scrolling back up