# OCaml SF Website

This project uses [eleventy](https://www.11ty.dev/) as a static site generator.

## Setup

```
# Installs the whole toolchain (one time setup)
npm install
```

## Build

This will generate the website in the `_site` directory.
```
npm run site:build
npm run css:build
```

To deploy in non-base directories of a website, use the
`--pathprefix="..."` option during the `site:build` step:
```
npm run site:build --pathprefix=tmp/
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

The `make deploy` target builds the website and copies it to another
"build" git repository. You should configure that other "build"
directory to point to

  https://github.com/ocaml-sf/ocaml-sf.github.io

and push from there. (`make deploy` shows command-line to do it.)

## Static files

Everything in static/ gets included exactly as-is in the deploy
directory. In particular, you can add files to static/docs, and they
will show up at $WEBSITE/docs/... online.