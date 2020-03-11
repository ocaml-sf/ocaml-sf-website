# OCaml SF Website

This project uses [eleventy](https://www.11ty.dev/) as a static site generator.

## Setup

```
# Installs the whole toolchain (one time setup)
npm install
```

## Development

```
# This will build your css file and watch changes
npm run css:watch

# In another tab run the static site generator in watchmode
npm run dev

# Then open your browser to load the index page
open localhost:8080
```

Whenever you are making a change in your CSS / templates, eleventy will
automatically reload your browser.

## Deployment

For a production build just run `npm run build`. After a production build, all
generated html / asset files can be found in the `_site` directory.

