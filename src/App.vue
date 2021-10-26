<template>
  <v-app id="app">
    <v-app-bar
      app
      color="default"
      :class="{ 'pr-md-8': $route.name !== 'Home' }"
      clipped-right
      flat
      height="72"
    >
      <v-container
        fluid
      >
        <v-row
          align="center"
          dense
        >
          <v-col
            v-if="$vuetify.breakpoint.smAndDown || $route.name === 'Home'"
            cols="auto"
          >
            <logo />
          </v-col>

          <v-col
            v-if="$vuetify.breakpoint.mdAndUp && $route.name !== 'Home'"
            cols="auto"
          >
            <search />
          </v-col>

          <v-col
            v-if="$vuetify.breakpoint.mdAndUp && $route.name !== 'Home'"
            cols="auto"
          >
            <v-btn
              icon
              @click="mini = !mini"
            >
              <v-icon>{{ mini ? 'mdi-dots-horizontal' : 'mdi-dots-vertical' }}</v-icon>
            </v-btn>
          </v-col>

          <v-spacer />

          <v-col
            v-if="$route.name === 'Release'"
            class="px-0"
            cols="auto"
          >
            <v-btn
              icon
            >
              <v-icon>mdi-cast</v-icon>
            </v-btn>
          </v-col>

          <v-col
            v-if="$route.name === 'Release'"
            class="px-0"
            cols="auto"
          >
            <v-btn
              icon
            >
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </v-col>

          <v-col
            class="px-0"
            cols="auto"
          >
            <locale-switch />
          </v-col>

          <v-col
            v-if="$route.name !== 'Home'"
            class="px-0"
            cols="auto"
          >
            <user />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      app
      class="transparent"
      :mini-variant.sync="mini"
      :mini-variant-width="74"
      :value="$route.name !== 'Home'"
    >
      <v-sheet
        color="default"
        :class="[{ 'justify-center': mini }, 'd-flex align-center px-4']"
        height="72"
      >
        <logo :mini="mini" />
      </v-sheet>

      <navigation
        :items="navigation"
        :title="$t('Menu')"
        :mini="mini"
      />

      <v-divider class="ma-4" />

      <navigation
        :items="categories"
        :title="$t('Categories')"
        :mini="mini"
      />

      <v-divider
        v-if="!mini"
        class="ma-4"
      />

      <theme-switch
        v-if="!mini"
        class="pa-4"
      />
    </v-navigation-drawer>

    <v-navigation-drawer
      app
      class="transparent"
      clipped
      disable-resize-watcher
      right
      :value="$route.name === 'Release'"
      width="420"
    >
      <v-list class="py-0">
        <v-list-item>
          <v-list-item-content class="ml-0">
            <v-list-item-subtitle
              class="text-uppercase"
              style="font-size: 0.75rem; letter-spacing: 0.1rem;"
            >
              {{ $t('Subjects') }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <template
          v-for="(video, index) in videos"
        >
          <v-list-item
            :key="video.id"
            :to="`/release/${video.id}`"
          >
            <v-list-item-content>
              <v-list-item-title>{{ $t('Subject') }} {{ index + 1 }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>

      <v-divider
        class="ma-4 mb-6"
      />

      <div class="px-4">
        <related-videos :key="$route.path" />
      </div>
    </v-navigation-drawer>

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import LocaleSwitch from '@/components/LocaleSwitch.vue';
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';
import RelatedVideos from '@/components/RelatedVideos.vue';
import Search from '@/components/Search.vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import User from '@/components/User.vue';
import categories from '@/data/categories.json';
import videos from '@/data/videos.json';

export default {
  components: {
    LocaleSwitch,
    Logo,
    Navigation,
    RelatedVideos,
    Search,
    ThemeSwitch,
    User,
  },
  data: (vm) => ({
    categories,
    mini: null,
    navigation: [
      {
        key: vm.$i18n.t('Dashboard'),
        icon: 'mdi-view-dashboard-outline',
        path: '/dashboard',
      },
      {
        key: vm.$i18n.t('Profile'),
        icon: 'mdi-account',
        path: '/dashboard',
      },
      {
        key: vm.$i18n.t('Help'),
        icon: 'mdi-help',
        path: '/dashboard',
      },
    ],
    videos,
  }),
};
</script>
