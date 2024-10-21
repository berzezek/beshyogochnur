<template>
  <div class="main">
    <section class="module-small">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-3 sidebar">
            <side-widgets :widgets="localizedWidgets" />
          </div>
          <div class="col-sm-8 col-sm-offset-1">
            <side-services />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { t, locale } = useI18n()
const lang = useCookie('lang')

// Инициализация с текущим языком из куки или дефолтным значением
if (lang.value) {
  locale.value = lang.value
}

// Динамическое создание списка виджетов
const createWidgets = () => [
  { name: t('service_1_title'), image: "/images/rp-1.jpg", },
  { name: t('service_2_title'), image: "/images/rp-2.jpg", },
  { name: t('service_3_title'), image: "/images/rp-3.jpg", },
  { name: t('service_4_title'), image: "/images/rp-4.jpg", }
]

// Локализованный список виджетов
const localizedWidgets = ref(createWidgets())

// Наблюдение за изменением языка и обновление виджетов
watch(locale, () => {
  localizedWidgets.value = createWidgets()
})

// Функция смены языка
const changeLanguage = (newLang: string) => {
  locale.value = newLang
  lang.value = newLang
}

</script>
