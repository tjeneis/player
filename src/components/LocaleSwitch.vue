<template>
  <v-menu
    offset-y
  >
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>
          mdi-web
        </v-icon>
      </v-btn>
    </template>
    <v-list
      class="py-0"
      dense
    >
      <v-list-item
        v-for="locale in $i18n.availableLocales.reverse()"
        :key="locale"
        @click="setLocale(locale)"
      >
        <v-list-item-title>{{ locale.toUpperCase() }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'LocaleSwitch',
  methods: {
    setLocale(locale) {
      // Update i18n, Vuetify, MomentJS locales
      this.$i18n.locale = locale;
      this.$vuetify.lang.current = locale;
      this.$moment.locale(locale);
    },
  },
};
</script>
