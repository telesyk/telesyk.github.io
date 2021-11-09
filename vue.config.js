module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'docs/'
    : 'dist/',
  outputDir: process.env.NODE_ENV === 'production'
    ? 'docs'
    : 'dist',
}