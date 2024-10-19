<template>
  <div>
    <main-loader v-if="pending" />
    <div v-else>
      <section class="module" id="catalog">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <h2 class="module-title font-alt">{{ $t('products') }}</h2>
              <!-- <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div> -->
            </div>
          </div>
          <div class="row">
            <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" v-for="product in products?.results" :key="product.name">
              <div class="team-item" @click="productDetail(product.slug)">
                <div class="team-image"><img :src="product.image" :alt="product.name" />
                </div>
                <div class="team-descr font-alt">
                  <div class="team-name">{{ product.name }}</div>
                  <div class="team-role">{{ product.price }} {{ $t('currency') }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-20">
            <a @click="navigateTo('/catalog')" class="btn btn-b mb-4">{{ $t('back') }}</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/types/apiResponse' // Импорт типа с помощью import type;

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const lang = useCookie('lang')

const { data: products, pending, error } = await useFetch<IProduct>(`${runtimeConfig.public.apiBase}catalogs/${route.params.slug}/?${lang.value ? `lang=${lang.value}` : 'lang=uz'}`)

const productDetail = async (slug: string) => {
  router.push(`/product/${slug}`)
}

</script>