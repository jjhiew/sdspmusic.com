module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Copy static root files (favicons, CNAME, etc.) to the root of the output
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
