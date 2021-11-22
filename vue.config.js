module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/telesyk.github.io/docs/'
    : 'dist/',
  outputDir: process.env.NODE_ENV === 'production'
    ? 'docs'
    : 'dist',
}