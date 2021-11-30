module.exports = {
  publicPath: '/',
  outputDir: process.env.NODE_ENV === 'production'
    ? 'docs'
    : 'dist',
  lintOnSave: process.env.NODE_ENV !== 'production',
  crossorigin: 'anonymous',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Oles Tk. | Online resume',
    },
  }
}