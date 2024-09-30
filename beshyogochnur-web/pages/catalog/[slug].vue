<template>
  <div>
    <div class="page-loader" v-if="!productsLoaded">
      <div class="loader">Loading...</div>
    </div>
    <div v-else>
      <section class="module" id="catalog">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <h2 class="module-title font-alt">Продукция</h2>
              <!-- <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div> -->
            </div>
          </div>
          <div class="row"></div>
          <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" v-for="product in products" :key="product.name">
            <div class="team-item" @click="productDetail(product.slug)">
              <div class="team-image"><img :src="product.image" :alt="product.name" />
              </div>
              <div class="team-descr font-alt">
                <div class="team-name">{{ product.name }}</div>
                <div class="team-role">{{ product.price }} Сум</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/types/product';

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const products = ref<IProduct[]>([])
const productsLoaded = ref(false)

const { data, pending, error } = await useFetch<IProduct[]>(`${runtimeConfig.public.apiBase}catalog/${route.params.slug}/`)

const productDetail = async (slug: string) => {
  router.push(`/product/${slug}`)
}


if (data.value) {
  products.value = data.value
  console.log(products.value)
  productsLoaded.value = true
}
</script>