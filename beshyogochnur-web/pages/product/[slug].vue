<template>
  <section class="module">
    <main-loader v-if="pending" />
    <div class="container" v-if="product">
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
              <div class="price font-alt"><span class="amount">{{ product.price }} <span
                    data-lang="currency">Сум</span></span></div>
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
            <div class="col-sm-8"><a class="btn btn-lg btn-block btn-round btn-b">Заказать сейчас</a></div>
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


const { data: product, pending, error } = await useFetch<IProduct>(`${runtimeConfig.public.apiBase}products/${route.params.slug}/`)

</script>