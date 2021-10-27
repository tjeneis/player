<template>
  <div>
    <h2 class="mb-6 font-weight-medium">
      {{ $t('MostWatched') }}
    </h2>
    <v-window
      v-model="window"
      continuous
      show-arrows
      show-arrows-on-hover
    >
      <v-window-item
        v-for="i in Math.ceil(videos.length / itemsPerWindow)"
        :key="i"
      >
        <v-row>
          <template
            v-for="video in videos.slice((i - 1) * itemsPerWindow, i * itemsPerWindow)"
          >
            <v-col
              :key="video.id"
              cols="12"
              :md="12 / itemsPerWindow"
            >
              <v-card
                class="d-flex flex-column fill-height"
                :color="$vuetify.theme.dark ? 'default lighten-1' : '#F4F4F4'"
                :elevation="0"
                :to="`/release/${video.id}`"
              >
                <v-img
                  class="flex-grow-0"
                  :src="`https://vumbnail.com/${video.id}.jpg`"
                  :height="160"
                >
                  <v-chip
                    color="default"
                    small
                    style="position: absolute; top: 1rem; right: 1rem;"
                  >
                    {{ categories[video.category].key }}
                  </v-chip>
                </v-img>
                <div class="d-flex flex-column flex-grow-1">
                  <v-card-subtitle
                    class="pb-0"
                    style="opacity: 0.9"
                  >
                    {{ video.author }}
                  </v-card-subtitle>
                  <v-card-title class="pt-0 pb-2">
                    {{ video.title }}
                  </v-card-title>
                  <v-card-subtitle
                    class="caption mt-auto"
                    style="opacity: 0.6"
                  >
                    {{ $t('Views', { views: video.views }) }} &nbsp;•&nbsp; {{ $moment(video.date, 'YYYY-MM-DD').fromNow() }}
                  </v-card-subtitle>
                </div>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </v-window-item>
    </v-window>
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
