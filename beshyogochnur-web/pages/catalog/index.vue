<template>
  <div>
    <main-loader v-if="pending" />
    <div v-else>
      <section class="module" id="catalog">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <h2 class="module-title font-alt">{{ $t('products') }}</h2>
            </div>
          </div>
          <div class="row">
            <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" v-for="catalog in catalogs?.results" :key="catalog.name">
              <div class="team-item" @click="catalogList(catalog.slug)">
                <div class="team-image"><img :src="catalog.image" :alt="catalog.name" />
                </div>
                <div class="team-descr font-alt">
                  <div class="team-name">{{ catalog.name }}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ICatalog } from '~/types/apiResponse'
const runtimeConfig = useRuntimeConfig()
const router = useRouter()
const lang = useCookie('lang')

const { data: catalogs, pending, error } = await useFetch<ICatalog>(`${runtimeConfig.public.apiBase}catalogs/?${lang.value ? `lang=${lang.value}` : 'lang=uz'}`)

const catalogList = async (slug: string) => {
  router.push(`/catalog/${slug}`)
}

</script>
