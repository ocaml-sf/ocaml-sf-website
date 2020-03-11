module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
