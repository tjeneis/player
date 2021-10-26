<template>
  <v-container
    class="pr-md-6 mb-4"
    fluid
  >
    <v-row>
      <v-col cols="12">
        <v-card
          color="rgba(255,255,255,0.05)"
          elevation="0"
          rounded
        >
          <div
            v-if="loading"
            style="position: absolute; top: calc(50% - 32px); left: calc(50% - 32px);"
          >
            <v-progress-circular
              class="align-self-center"
              color="primary"
              indeterminate
              size="64"
            />
          </div>
          <vimeo-player
            autoplay
            :video-id="id"
            :options="{
              responsive: true
            }"
            :style="{ opacity: loading ? 0 : 1 }"
            @loaded="loading = false;"
          />
        </v-card>
      </v-col>
      <v-col
        cols="12"
      >
        <h1
          class="mb-3 font-weight-medium"
          style="line-height: 2.75rem;"
        >
          {{ video.title }}
        </h1>
        <div v-html="video.description" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import videos from '@/data/videos.json';

export default {
  name: 'Release',
  props: {
    id: {
      type: String,
      default: undefined,
    },
  },
  data: () => ({
    videos,
    loading: true,
  }),
  computed: {
    video() {
      return this.videos.find((v) => v.id === this.id);
    },
  },
};
</script>
