module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],
  purge: {
    
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/site/*.njk',
      'src/site/_includes/layouts/*.njk',
      'src/site/_includes/*.njk'
    ]
  }
}
