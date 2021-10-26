<template>
  <v-list class="transparent py-0">
    <v-list-item v-if="title && !mini">
      <v-list-item-content class="ml-0">
        <v-list-item-subtitle
          class="text-uppercase"
          style="font-size: 0.75rem; letter-spacing: 0.1rem;"
        >
          {{ title }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item
      v-for="item in items"
      :key="item.key"
      :to="item.path"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>
          {{ item.key }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>

export default {
  name: 'Navigation',
  props: {
    title: {
      type: String,
      default: undefined,
    },
    items: {
      type: Array,
      default: () => [],
    },
    mini: {
      type: Boolean,
      default: undefined,
    },
  },
};
</script>

<style lang="scss" scoped>
  .v-list-item {
    &:hover {
      .v-list-item__icon {
        background-color: var(--v-primary-base);
      }
    }

    .v-list-item__icon {
      background-color: rgba(255,255,255,0.05);
      border-radius: 10px;
      margin: 12px 0 !important;
      padding: 8px;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    }

    .v-list-item__content {
      margin-left: 1rem;
    }
  }
</style>
