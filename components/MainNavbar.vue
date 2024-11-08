<template>
  <nav class="navbar navbar-custom navbar-transparent navbar-fixed-top one-page wow" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span
            class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span
            class="icon-bar"></span></button><nuxt-link class="navbar-brand" href="/">Beshyogochnur</nuxt-link>
      </div>
      <div class="collapse navbar-collapse" id="custom-collapse">
        <ul class="nav navbar-nav navbar-right">
          <!-- <li>
            <nuxt-link to="/#main">{{ $t('main') }}</nuxt-link>
          </li> -->
          <li>
            <nuxt-link to="/#about">{{ $t('about_us') }}</nuxt-link>
          </li>
          <li class="dropdown" id="service-cursor">
            <a :class="{ 'dropdown-toggle': true, 'binded': isBinded }" data-toggle="dropdown">
              {{ $t('services') }}
            </a>

            <ul class="dropdown-menu">
              <li>
                <nuxt-link to="/rental">
                  {{ $t('service_3_title') }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/project">
                  {{ $t('service_2_title') }}
                </nuxt-link>
              </li>
            </ul>
          </li>

          <li>
            <nuxt-link to="/#investors">{{ $t('investors') }}</nuxt-link>
          </li>
          <li class="dropdown" id="shop-cursor">
            <a :class="{ 'dropdown-toggle': true, 'binded': isBinded }" data-toggle="dropdown">
              {{ $t('shop') }}
            </a>

            <ul class="dropdown-menu">
              <li v-for="catalog in catalogs" :key="catalog.name">
                <nuxt-link @click="navigateTo(`/catalog/${catalog.slug}`)">
                  {{ catalog.name }}
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/#contact">{{ $t('contact') }}</nuxt-link>
          </li>
          <li class="dropdown" id="lang-cursor">
            <a class="dropdown-toggle" data-toggle="dropdown">
              <img src="/images/lang/icons8-language-48.png" alt="lang" width="24" />
            </a>
            <ul class="dropdown-menu" role="menu">
              <li id="ru">
                <a @click="setLanguage('ru')"><img src="/images/lang/russia.png" alt="lang" width="24" />
                  Русский</a>
              </li>
              <li id="uz">
                <a @click="setLanguage('uz')"><img src="/images/lang/uzbekistan.png" alt="lang" width="24" />
                  O'zbek</a>
              </li>
              <li id="en">
                <a @click="setLanguage('en')"><img src="/images/lang/united-kingdom.png" alt="lang" width="24" />
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
import type { Category } from '~/types/apiResponse';
const runtimeConfig = useRuntimeConfig();
const lang = useCookie('lang');

const { setLocale } = useI18n();

const catalogs = ref<Category[]>();
const isBinded = ref(true);

const fetchCatalogs = async () => {
  const langParam = lang.value ? `lang=${lang.value}` : 'lang=uz';
  const response = await fetch(
    `${runtimeConfig.public.apiBase}catalogs/?${langParam}`
  );
  catalogs.value = await response.json();
};

watch(lang, async () => {
  await fetchCatalogs();
});

await fetchCatalogs();


const setLanguage = async (newLang: string) => {
  lang.value = newLang;
  setLocale(newLang);
  await fetchCatalogs();
};
</script>

<style scoped>
#ru,
#uz,
#en,
#lang-cursor,
#service-cursor,
#shop-cursor {
  cursor: pointer;
}
</style>
