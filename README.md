# Obsidian / Quartz / GitHub Pages Template

Deployed URL: https://defenderofbasic.github.io/obsidian-quartz-template

Template for hosting your Obsidian notebook on GitHub pages with CI deployment. 

## Basic setup

Full tutorial with screenshots & videos: https://dev.to/defenderofbasic/host-your-obsidian-notebook-on-github-pages-for-free-8l1. 

It's basically (1) fork this (2) go to repo's "Settings" > "Pages", Under "Build and Deployment" select GitHub Actions. Then go to "Actions" and enable GitHub actions for your fork. Edit the pages in [source/content](./source/content) with Obsidian or any text editor. It generates HTML using [Quartz](https://github.com/jackyzha0/quartz). To generate the HTML locally, run `npx quartz build --serve` in `./source/`

## Raw HTML pages

There is a [source/raw_html](./source/raw_html) folder that gets copied into the build folder in CI. This lets you host arbitrary HTML outside of quartz. Example: https://defenderofbasic.github.io/obsidian-quartz-template/raw-html-test.html

I made the "raw HTML" option for people who are generating HTML UI's with Claude/ChatGPT but want to tweak them/host them themselves. Or make a personal archive of web pages, etc.

## Further customization

> Quartz is meant to be extremely configurable, even if you don’t know any coding. Most of the configuration you should need can be done by just editing quartz.config.ts or changing the layout in quartz.layout.ts.

https://quartz.jzhao.xyz/configuration

WORDS HERE!
