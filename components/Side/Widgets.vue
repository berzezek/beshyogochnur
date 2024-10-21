<template>
  <div class="widget">
    <h5 class="widget-title font-alt">{{ $t('services') }}</h5>
    <ul class="widget-posts">
      <li class="clearfix" v-for="widget in widgets" :key="widget.name">
        <div class="widget-posts-image">
          <a href="#"><img :src="widget.image" alt="Post Thumbnail" /></a>
        </div>
        <div class="widget-posts-body">
          <div class="widget-posts-title">
            <a href="#">{{ widget.name }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  widgets: { name: string; image: string }[]
}>()



</script>
