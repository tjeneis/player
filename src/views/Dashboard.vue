<template>
  <v-container
    class="pr-md-12 mb-6"
    fluid
  >
    <v-row>
      <v-col
        cols="12"
      >
        <h1 class="mb-0 font-weight-medium">
          {{ $t('HighlightedFor', { username }) }}
        </h1>
      </v-col>
      <v-col
        cols="12"
        md="8"
      >
        <highlighted-video id="500518235" />
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <highlighted-video id="637403296" />
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col
        cols="12"
      >
        <video-slider />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import HighlightedVideo from '@/components/HighlightedVideo.vue';
import VideoSlider from '@/components/VideoSlider.vue';

export default {
  name: 'Dashboard',
  components: {
    HighlightedVideo,
    VideoSlider,
  },
  computed: {
    ...mapState({
      username: (state) => state.username,
    }),
  },
};
</script>
