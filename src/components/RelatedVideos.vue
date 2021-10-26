<template>
  <div>
    <h2 class="mb-6 font-weight-medium">
      {{ $t('RelatedVideos') }}
    </h2>
    <v-card
      v-for="(video, index) in videos.sort(() => 0.5 - Math.random()).slice(0,2)"
      :key="video.id"
      :class="[{ 'mt-6': index > 0 }, 'rounded-0']"
      color="transparent"
      :elevation="0"
      :to="`/release/${video.id}`"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar
          class="rounded"
          size="90"
        >
          <img :src="`https://vumbnail.com/${video.id}.jpg`">
        </v-avatar>

        <div
          class="d-flex flex-column justify-center"
          style="overflow: hidden; width: 100%;"
        >
          <v-card-title class="pt-0 d-block text-truncate">
            {{ video.title }}
          </v-card-title>
          <v-card-subtitle
            class="pt-1 pb-0"
            style="opacity: 0.9"
          >
            {{ video.author }}
          </v-card-subtitle>
          <v-card-subtitle
            class="caption pt-1 pb-0"
            style="opacity: 0.6"
          >
            {{ $t('Views', { views: video.views }) }} &nbsp;•&nbsp; {{ $moment(video.date, 'YYYY-MM-DD').fromNow() }}
          </v-card-subtitle>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import categories from '@/data/categories.json';
import videos from '@/data/videos.json';

export default {
  name: 'VideoSlider',
  data: () => ({
    categories,
    videos,
    window: 0,
  }),
  computed: {
    itemsPerWindow() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 1;
        case 'sm':
          return 1;
        case 'md':
          return 3;
        case 'lg':
          return 4;
        case 'xl':
          return 4;
        default:
          return 1;
      }
    },
  },
};
</script>
