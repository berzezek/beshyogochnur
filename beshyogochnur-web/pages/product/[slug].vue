<template>
  <section class="module">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 mb-sm-40"><a class="gallery"><img :src="product.image" :alt="product.name" /></a>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-12">
              <h1 class="product-title font-alt">{{ product.name }}</h1>
            </div>
          </div>
          <div class="row mb-20">
            <div class="col-sm-12">
              <div class="price font-alt"><span class="amount">£{{ product.price }}</span></div>
            </div>
          </div>
          <div class="row mb-20">
            <div class="col-sm-12">
              <div class="description">
                <p>{{ product.description }}</p>
              </div>
            </div>
          </div>
          <div class="row mb-20">
            <div class="col-sm-8"><a class="btn btn-lg btn-block btn-round btn-b" >Заказать сейчас</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/types/product';

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const product = ref<IProduct>({
  url: '',
  name: '',
  slug: '',
  description: '',
  image: '',
  price: 0
})
const productLoaded = ref(false)

const { data, pending, error } = await useFetch<IProduct>(`${runtimeConfig.public.apiBase}products/${route.params.slug}/`)


if (data.value) {
  product.value = data.value
  productLoaded.value = true
}
</script>