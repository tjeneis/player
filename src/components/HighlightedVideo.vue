<template>
  <v-card
    class="v-card--highlight"
    elevation="0"
    :to="`/release/${video.id}`"
  >
    <v-img
      height="365"
      :src="`https://vumbnail.com/${video.id}.jpg`"
    >
      <div
        class="white--text"
        style="padding: 1.5rem; display: flex; flex-direction: column; height: 100%; position: absolute; top: 0; left: 0;"
      >
        <h2 class="font-weight-medium">
          {{ video.title }}
        </h2>
        <div class="mt-auto">
          <h3 class="font-weight-medium">
            {{ video.author }}
          </h3>
          <div
            class="caption mt-1"
            style="opacity: 0.6"
          >
            {{ $t('Views', { views: video.views }) }} &nbsp;•&nbsp; {{ $moment(video.date, 'YYYY-MM-DD').fromNow() }}
          </div>
        </div>
      </div>
      <v-chip
        color="primary"
        small
        style="position: absolute; bottom: 1.5rem; right: 1.5rem;"
      >
        {{ categories[video.category].key }}
      </v-chip>
    </v-img>
  </v-card>
</template>

<script>
import categories from '@/data/categories.json';
import videos from '@/data/videos.json';

export default {
  name: 'HighlightedVideo',
  props: {
    id: {
      type: String,
      default: undefined,
    },
  },
  data: () => ({
    categories,
    videos,
  }),
  computed: {
    video() {
      return this.videos.find((v) => v.id === this.id);
    },
  },
};
</script>
