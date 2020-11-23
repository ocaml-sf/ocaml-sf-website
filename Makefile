BUILDFLAGS =
ifneq ($(PATHPREFIX),)
	BUILDFLAGS += --pathprefix=$(PATHPREFIX)
endif

.PHONY: build
build:
	npm run site:build -- $(BUILDFLAGS)
	npm run css:build

COMPLETE_SITE = _site/* static/*
DEPLOY_REPO = ../ocaml-sf.github.io
deploy: build
	@cd $(DEPLOY_REPO) && git rm -r *
	@cp -r $(COMPLETE_SITE) $(DEPLOY_REPO)/
	@cd $(DEPLOY_REPO) && git add *
	cd $(DEPLOY_REPO) && git status
	@cd $(DEPLOY_REPO) && \
	   (git commit -a -m "update website from build" \
	    && echo "now push from $(DEPLOY_REPO): \
	             (cd $(DEPLOY_REPO) && git push)" \
	    || echo "deploy failed: maybe there were no changes at all?")

.PHONY: test
test:
	$(MAKE) build PATHPREFIX=~scherer/tmp/ocsf-new-website
	scp -r _site/* inria:public_html/tmp/ocsf-new-website
