<template>
  <div>

    <div class="post" v-for="service in services" :key="service.name" :id="service.name">
      <div class="post-thumbnail">
        <img :src="service.image" width="400" :alt="service.name" />
      </div>
      <div class="post-header font-alt">
        <h1 class="post-title">{{ service.name }}</h1>
      </div>
      <div class="post-entry">
        <p>{{ service.text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  services: { name: string; image: string;  text: string }[]
}>()

</script>
