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
    .v-application.theme--dark & {
      .v-input__slot {
      background: rgba(255,255,255,0.05);

        .v-icon {
          color: rgba(255,255,255,0.25);
        }
      }
    }
    .v-application.theme--light & {
      .v-input__slot {
        background: rgba(0,0,0,0.05);

        .v-icon {
          color: rgba(0,0,0,0.5);
        }
      }
    }

    .v-input__slot {
      padding: 0 1rem !important;
    }
  }
</style>
