<template>
  <div class="widget">
    <h5 class="widget-title font-alt">{{ widgetName }}</h5>
    <ul class="widget-posts">
      <li class="clearfix" v-for="widget in widgets" :key="widget.name">
        <div class="widget-posts-image" v-if="widget.image">
          <a><img :src="widget.image" alt="Post Thumbnail" /></a>
        </div>
        <div class="widget-posts-body">
          <div class="widget-posts-title">
            <span @click="widgetClick(widget.name)">{{ widget.name }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  widgets: { name: string; image?: string }[],
  widgetName: string
}>()

const emit = defineEmits(
  ['widgetClick']
)

const widgetClick = (name: string) => {
  emit('widgetClick', name)
}


</script>
