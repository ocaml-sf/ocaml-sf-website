SHELL = /bin/sh
SOURCE_PAGES:=$(notdir $(wildcard content/*.md))
MD_PAGES:=$(patsubst %.md,build/%.html,$(SOURCE_PAGES))
TEMPLATE:=layouts/main-layout.html

# TODO: production build with NODE_ENV=production 

working_dir = $(realpath .)

all: site $(MD_PAGES) build/index.html css

site:
	mkdir -p build

css: build/main.css

build/main.css: styles/main.css
	npx postcss styles/main.css -o $@ 

build/%.html: content/%.md $(TEMPLATE)
	pandoc \
		--template $(TEMPLATE) \
		--title-prefix "OCSF" \
		$< -o $@

build/index.html: content/index.html $(TEMPLATE)
	pandoc \
		--template $(TEMPLATE) \
		--title-prefix "OCSF" \
		--metadata title="Home" \
		content/index.html -o $@

clean:
	rm -r build

dist:
	echo "not implemented"

watch:
	watchman-make -p 'layouts/*.html' 'content/*.md' 'content/*.html' 'Makefile' -t all

.PHONY: css dist build clean watch
