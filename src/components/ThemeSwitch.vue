<template>
  <v-switch
    v-model="$vuetify.theme.dark"
    inset
    :label="$t('DarkMode')"
    large
  />
</template>

<script>
export default {
  name: 'ThemeSwitch',
};
</script>
