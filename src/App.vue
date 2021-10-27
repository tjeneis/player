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
            <cast-modal />
          </v-col>

          <v-col
            v-if="$route.name === 'Release'"
            class="px-0"
            cols="auto"
          >
            <v-btn
              icon
              @click="$root.$emit('toggle-config')"
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
      disable-resize-watcher
      :mini-variant.sync="mini"
      :mini-variant-width="74"
      :value="$route.name !== 'Home' && $vuetify.breakpoint.mdAndUp"
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
        :open="true"
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
      :value="$route.name === 'Release' && $vuetify.breakpoint.mdAndUp"
      width="20%"
    >
      <v-list class="py-0">
        <v-list-item>
          <v-list-item-content class="ml-0">
            <v-list-item-subtitle
              class="text-uppercase"
              style="font-size: 0.75rem; letter-spacing: 0.1rem;"
            >
              {{ $t('Parts') }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <template
          v-for="(part, index) in parts.filter(x => x.enabled)"
        >
          <v-list-item
            :key="videos[index].id"
            :to="`/release/${videos[index].id}`"
          >
            <v-list-item-content>
              <v-list-item-title>{{ part.subject }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>

      <!-- <v-divider
        class="ma-4 mb-6"
      />

      <div class="px-4">
        <related-videos :key="$route.path" />
      </div> -->
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="config"
      absolute
      color="default"
      right
      temporary
    >
      <div class="pa-4">
        <v-list class="py-0">
          <v-list-item>
            <v-list-item-content class="ml-0">
              <v-list-item-subtitle
                class="text-uppercase"
                style="font-size: 0.75rem; letter-spacing: 0.1rem;"
              >
                {{ $t('Parts') }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <template
            v-for="(part, index) in parts"
          >
            <v-list-item
              :key="index"
            >
              <v-list-item-action>
                <v-checkbox
                  v-model="part.enabled"
                  color="primary"
                />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ part.subject }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import CastModal from '@/components/CastModal.vue';
import LocaleSwitch from '@/components/LocaleSwitch.vue';
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';
// import RelatedVideos from '@/components/RelatedVideos.vue';
import Search from '@/components/Search.vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import User from '@/components/User.vue';
import categories from '@/data/categories.json';
import subjects from '@/data/subjects.json';
import videos from '@/data/videos.json';

export default {
  components: {
    CastModal,
    LocaleSwitch,
    Logo,
    Navigation,
    // RelatedVideos,
    Search,
    ThemeSwitch,
    User,
  },
  data: (vm) => ({
    categories,
    mini: null,
    config: false,
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
    parts: new Array(6).fill().map((e, i) => ({ subject: subjects[i], enabled: true })),
    videos,
  }),
  created() {
    this.$root.$on('toggle-config', () => {
      this.config = !this.config;
    });
  },
};
</script>
