module.exports = {
  trailingSlash: true,



  async redirects() {

    return [
      {
        source: '/',
        destination: '/home/1',
        permanent: true,
      }
    ]
  }
};