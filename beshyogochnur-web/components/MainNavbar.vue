<template>
  <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span
            class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span
            class="icon-bar"></span></button><span class="navbar-brand" @click="toMain('main')"
          data-lang="company_name">Beshyougochnur</span>
      </div>
      <div class="collapse navbar-collapse" id="custom-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a data-lang="main" @click="toMain('main')">Главная</a></li>
          <li><a data-lang="about_us" @click="toMain('about')">О нас</a></li>
          <li><a data-lang="services" @click="toMain('services')">Услуги</a></li>
          <li><a data-lang="contact" @click="toMain('contact')">Контакты</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle" href="#" data-toggle="dropdown">
              <img src="/images/lang/earth.png" alt="lang" width="20" />
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#ru"><img src="/images/lang/russia.png" alt="lang" width="24" />
                  Русский</a></li>
              <li><a href="#uz"><img src="/images/lang/uzbekistan.png" alt="lang" width="24" />
                  O'zbek</a></li>
              <li><a href="#en"><img src="/images/lang/united-kingdom.png" alt="lang" width="24" />
                  English</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const router = useRouter()

const toMain = async (href = '') => {
  router.push(`/#${href}`)
}
</script>