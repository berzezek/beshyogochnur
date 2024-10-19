// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'static',
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control':
            'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          Pragma: 'no-cache',
          Expires: '0',
        },
      },
    },
  },
  ssr: true,
  modules: ['@nuxtjs/i18n'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_BASE,
      telegramToken: process.env.NUXT_TELEGRAM_TOKEN,
      chatId: process.env.NUXT_CHAT_ID,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Beshyogochnur',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/solar/favicon.jpg' },
        {
          rel: 'stylesheet',
          href: '/lib/bootstrap/dist/css/bootstrap.min.css',
        },
        { rel: 'stylesheet', href: '/css/colors/default.css' },
        { rel: 'stylesheet', href: '/alertifyjs/css/alertify.min.css' },
        {
          rel: 'stylesheet',
          href: '/alertifyjs/css/themes/default.min.css',
        },
        {
          rel: 'stylesheet',
          href: '/css/style.css',
        },
        {
          rel: 'stylesheet',
          href: '/css/style-rtl.css',
        },
        {
          rel: 'stylesheet',
          href: '/lib/simple-text-rotator/simpletextrotator.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Volkhov:400i',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800',
        },
        {
          rel: 'stylesheet',
          href: '/lib/animate.css/animate.css',
        },
        {
          rel: 'stylesheet',
          href: '/lib/components-font-awesome/css/font-awesome.min.css',
        },
        {
          rel: 'stylesheet',
          href: '/lib/et-line-font/et-line-font.css',
        },
        {
          rel: 'stylesheet',
          href: '/lib/flexslider/flexslider.css',
        },
        {
          rel: 'stylesheet',
          href: '/lib/owl.carousel/dist/assets/owl.carousel.min.css',
        },
        {
          rel: 'stylesheet',
          href: '/lib/owl.carousel/dist/assets/owl.theme.default.min.css',
        },
        {
          rel: 'stylesheet',
          href: '/lib/magnific-popup/dist/magnific-popup.css',
        },
      ],
      script: [
        { src: '/lib/jquery/dist/jquery.js' },
        { src: '/lib/bootstrap/dist/js/bootstrap.min.js' },
        { src: '/lib/wow/dist/wow.js' },
        { src: '/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js' },
        { src: '/lib/isotope/dist/isotope.pkgd.js' },
        { src: '/lib/imagesloaded/imagesloaded.pkgd.js' },
        { src: '/lib/flexslider/jquery.flexslider.js' },
        { src: '/lib/owl.carousel/dist/owl.carousel.min.js' },
        {
          src: 'https://cdn.jsdelivr.net/gh/LieutenantPeacock/SmoothScroll@1.2.0/src/smoothscroll.min.js',
          integrity:
            'sha384-UdJHYJK9eDBy7vML0TvJGlCpvrJhCuOPGTc7tHbA+jHEgCgjWpPbmMvmd/2bzdXU',
          crossorigin: 'anonymous',
        },
        { src: '/lib/magnific-popup/dist/jquery.magnific-popup.js' },
        { src: '/lib/simple-text-rotator/jquery.simple-text-rotator.min.js' },
        { src: '/js/plugins.js' },
        { src: 'https://cdn.jsdelivr.net/npm/dotenv@16.4.5/lib/main.min.js' },
        { src: 'https://unpkg.com/imask' },
        { src: '/js/main.js' },
        { src: '/js/sendMessage.js' },
        { src: 'https://cdn.jsdelivr.net/npm/sweetalert2@11' },
        { src: '/alertifyjs/alertify.min.js' },
      ],
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: false,
      fallbackLocale: 'uz',
      redirectOn: 'root',
      cookieKey: 'lang',
    },
  },
});
