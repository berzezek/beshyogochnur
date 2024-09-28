import { createApp, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

    createApp({
      setup() {
        const catalogData = ref([]) // Переменная для хранения данных с API
        const error = ref(null)     // Переменная для хранения ошибок при запросе
        const selectedProducts = ref([]) // Переменная для хранения выбранных продуктов

        // Функция для получения данных с API
        const fetchData = async () => {
          try {
            const response = await fetch('http://beshyogochnur-api.cj98604.tw1.ru/api/v1/catalog/')
            if (!response.ok) {
              throw new Error(`Ошибка при запросе: ${response.status}`)
            }
            const data = await response.json()
            catalogData.value = data
          } catch (err) {
            error.value = err.message
          }
        }

        // Функция для получения продуктов по имени категории
        const fetchProducts = async (categoryName) => {
          try {
            const response = await fetch(`http://beshyogochnur-api.cj98604.tw1.ru/api/v1/catalog/${categoryName}/`)
            if (!response.ok) {
              throw new Error(`Ошибка при запросе продуктов: ${response.status}`)
            }
            const data = await response.json()
            selectedProducts.value = data
            console.log(`Продукты для категории ${categoryName}:`, data)
            catalogData.value = data
          } catch (err) {
            error.value = err.message
          }
        }

        // Получаем данные при монтировании компонента
        onMounted(() => {
          fetchData()
        })

        return {
          catalogData,
          error,
          fetchProducts,
          selectedProducts
        }
      }
    }).mount('#app')