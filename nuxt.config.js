module.exports = {
  head: {
    title: 'Здравница зубная',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ]
  },

  css: [
    '@/assets/css/16blocks.css',
    '@/assets/css/font-awesome.css',
    '@/assets/css/app.css'

  ],

  plugins: [
    {
      src: '~/assets/js/app.js', ssr: false
    }
  ]

}
