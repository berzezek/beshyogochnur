<template>
  <section class="module-small">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-md-3 sidebar">
          <side-widgets :widgets="services" :widget-name="t('services')" @widgetClick="widgetClick"/>
        </div>
        <div class="col-sm-8 col-sm-offset-1">
          <side-services :services="services" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t, locale } = useI18n()
const lang = useCookie('lang')

// Инициализация с текущим языком из куки или дефолтным значением
if (lang.value) {
  locale.value = lang.value
}



const createServices = () => [
  { name: t('service_1_title'), image: "/images/service_1.jpg", text: t('service_1_text') },
  { name: t('service_2_title'), image: "/images/service_2.jpg", text: t('service_2_text') },
  { name: t('service_3_title'), image: "/images/service_3.jpg", text: t('service_3_text') },
  { name: t('service_4_title'), image: "/images/service_4.jpg", text: t('service_4_text') }
]

// Локализованный список виджетов
const services = ref(createServices())

// Наблюдение за изменением языка и обновление виджетов
watch(locale, () => {
  services.value = createServices()
})

// Функция смены языка
const changeLanguage = (newLang: string) => {
  locale.value = newLang
  lang.value = newLang
}

const widgetClick = (name: string) => {
  navigateTo(`/services/#${name}`)
}

</script>
