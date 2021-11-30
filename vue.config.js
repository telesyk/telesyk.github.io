module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/telesyk.github.io/docs/'
    : '/',
  outputDir: process.env.NODE_ENV === 'production'
    ? 'docs'
    : 'dist',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Oles Tk. | Online resume',
    },
  }
}