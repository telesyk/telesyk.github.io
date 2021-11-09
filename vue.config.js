module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://raw.githubusercontent.com/telesyk/telesyk.github.io/gh-pages/docs/'
    : '/'
}