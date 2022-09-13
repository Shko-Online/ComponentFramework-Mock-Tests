
module.exports = {
    /**
     * 
     * @param {string} sourceText 
     * @param {string} sourcePath 
     * @param {*} options 
     * @returns 
     */
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(sourceText)};`,
    };
  },
};