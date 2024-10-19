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
          <li><nuxt-link to="/#main">{{ $t('main') }}</nuxt-link></li>
          <li><nuxt-link to="/#about">{{ $t('about_us') }}</nuxt-link></li>
          <li><nuxt-link to="/#services">{{ $t('services') }}</nuxt-link></li>
          <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown">{{ $t('products') }}</a>
            <ul class="dropdown-menu">
              <li><nuxt-link @click="navigateTo(`/catalog/${catalog.slug}`)" v-for="catalog in catalogs?.results"
                  :key="catalog.name">{{ catalog.name }}</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/#contact">{{ $t('contact') }}</nuxt-link></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown">
              <img src="/images/lang/earth.png" alt="lang" width="20" />
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a @click="setLocale('ru')"><img src="/images/lang/russia.png" alt="lang" width="24" />
                  Русский</a></li>
              <li><a @click="setLocale('uz')"><img src="/images/lang/uzbekistan.png" alt="lang" width="24" />
                  O'zbek</a></li>
              <li><a @click="setLocale('en')"><img src="/images/lang/united-kingdom.png" alt="lang" width="24" />
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
import type { ICatalog } from '~/types/apiResponse' // Импорт типа с помощью import type
const runtimeConfig = useRuntimeConfig()

const { setLocale, locales } = useI18n()

const lang = useCookie('lang')

const { data: catalogs, pending, error } = await useFetch<ICatalog>(`${runtimeConfig.public.apiBase}catalogs/?${lang.value ? `lang=${lang.value}` : 'lang=uz'}`)

</script>