<template>
  <v-menu
    offset-y
    left
  >
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-list class="py-0">
      <v-list-item to="/">
        <v-list-item-title>{{ $t('LogOut') }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'User',
  data: () => ({
    email: undefined,
  }),
};
</script>
