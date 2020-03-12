const markdownIt = require("markdown-it");
const mdAttrs = require("markdown-it-attrs");
const mdModifyToken = require("markdown-it-modify-token");

function card(content, imgSrc, title) {
  console.log(content);
  return `
<div class="flex justify-center">
  <div
    class="text-center flex flex-col max-w-xs md:text-left md:block lg:mr-6 lg:text-left lg:max-w-full"
  >
    <img
      class="h-16 mb-6"
      src="${imgSrc}"
      alt="Symbol image for ${title}"
    />
    <div class="font-serif mb-4 text-24">${title}</div>
    <div class="text-14 text-ghost-light"> ${content} </div>
  </div>
</div>
  `;
}

const appendClassname = (token, cn) => {
  const classname = token.attrObj.class;
  if(!classname) {
    token.attrObj.class = cn;
  }
  else {
    token.attrObj.class = cn + " " + classname;
  }
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPairedShortcode("card", card);

  const options = {
    html: true,
    breaks: false,
    linkify: true,
    modifyToken: function(token, env) {
      // see API https://markdown-it.github.io/markdown-it/#Token
      switch (token.type) {
        case "paragraph_open":
          appendClassname(token, "md-p");
          break;
        case "heading_open":
          appendClassname(token, `md-${token.tag}`);
          break;
        case "image":
          appendClassname(token, `md-img`);
          break;
        case "link_open":
        console.log(token);
          console.log(token);
          appendClassname(token, "md-a");
          break;
        //case "image": // set all images to 200px width except for foo.gif
        //if (token.attrObj.src !== "foo.gif") {
        //token.attrObj.width = "200px";
        //}
        //break;
        //case "link_open":
        //token.attrObj.target = "_blank"; // set all links to open in new window
        //break;
      }
    }
  };

  // We use attrs for easier class name manipulation on
  // markdown tokens
  // Read more about it here:
  // https://www.npmjs.com/package/markdown-it-attrs
  const markdownLib = markdownIt(options)
    .use(mdAttrs)
    .use(mdModifyToken);

  // Prevent indented content to be interpreted as code
  markdownLib.disable("code");

  eleventyConfig.setLibrary("md", markdownLib);

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
