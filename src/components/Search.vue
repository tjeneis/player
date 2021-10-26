<template>
  <v-text-field
    append-icon="mdi-magnify"
    dark
    hide-details="auto"
    :placeholder="$t('Search')"
    rounded
  />
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style lang="scss" scoped>
  .v-input::v-deep {
    .v-input__slot {
      background: rgba(255,255,255,0.05);
      padding: 0 1rem !important;

      .v-icon {
        color: rgba(255,255,255,0.25);
      }
    }
  }
</style>
