<template>
  <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span
            class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span
            class="icon-bar"></span></button><span class="navbar-brand" @click="navigateTo('/#main')"
          data-lang="company_name">Beshyougochnur</span>
      </div>
      <div class="collapse navbar-collapse" id="custom-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><nuxt-link data-lang="main" to="/#main">Главная</nuxt-link></li>
          <li><nuxt-link data-lang="about_us" to="/#about">О нас</nuxt-link></li>
          <li><nuxt-link data-lang="services" to="/#services">Услуги</nuxt-link></li>
          <li class="dropdown"><a class="dropdown-toggle" data-lang="products" data-toggle="dropdown">Продукция</a>
            <ul class="dropdown-menu">
              <li><nuxt-link @click="navigateTo(`/catalog/${catalog.slug}`)" v-for="catalog in catalogs" :key="catalog.name">{{ catalog.name }}</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link data-lang="contact" to="/#contact">Контакты</nuxt-link></li>
          <li class="dropdown">
            <a class="dropdown-toggle" href="#" data-toggle="dropdown">
              <img src="/images/lang/earth.png" alt="lang" width="20" />
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><nuxt-link to="#ru"><img src="/images/lang/russia.png" alt="lang" width="24" />
                  Русский</nuxt-link></li>
              <li><nuxt-link to="#uz"><img src="/images/lang/uzbekistan.png" alt="lang" width="24" />
                  O'zbek</nuxt-link></li>
              <li><nuxt-link to="#en"><img src="/images/lang/united-kingdom.png" alt="lang" width="24" />
                  English</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import type { ICatalog } from '~/types/catalog' // Импорт типа с помощью import type
const runtimeConfig = useRuntimeConfig()
const router = useRouter()


const { data: catalogs, pending, error } = await useFetch<ICatalog[]>(`${runtimeConfig.public.apiBase}catalog/`)

</script>