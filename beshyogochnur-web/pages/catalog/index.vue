<template>
  <div>
    <div class="page-loader" v-if="pending">
      <div class="loader">Loading...</div>
    </div>
    <div v-else>
      <section class="module" id="catalog">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <h2 class="module-title font-alt">Наш каталог</h2>
              <!-- <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div> -->
            </div>
          </div>
          <div class="row">
            <div class="mb-sm-20 wow fadeInUp col-sm-6 col-md-3" v-for="catalog in catalogs" :key="catalog.name">
              <div class="team-item" @click="catalogList(catalog.slug)">
                <div class="team-image"><img :src="catalog.image" :alt="catalog.name" />
                  <!-- <div class="team-detail">
                    <h5 class="font-alt">Hi all</h5>
                    <p class="font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus,
                      a&amp;nbsp;iaculis diam.</p>
                  </div> -->
                </div>
                <div class="team-descr font-alt">
                  <div class="team-name">{{ catalog.name }}</div>
                  <!-- <div class="team-role">Art Director</div> -->
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
import type { ICatalog } from '~/types/catalog' // Импорт типа с помощью import type
const runtimeConfig = useRuntimeConfig()
const router = useRouter()


const { data: catalogs, pending, error } = await useFetch<ICatalog[]>(`${runtimeConfig.public.apiBase}catalog/`)

const catalogList = async(slug: string) => {
  router.push(`/catalog/${slug}`)
}

</script>
