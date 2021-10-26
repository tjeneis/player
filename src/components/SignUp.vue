<template>
  <v-card
    class="pa-8"
    color="default lighten-1"
    elevation="0"
  >
    <h2 class="mb-3">
      {{ $t('Interested') }}
    </h2>
    <v-text-field
      v-model="email"
      class="mb-6"
      hide-details="auto"
      outlined
      :placeholder="$t('Email')"
    />
    <v-btn
      color="primary"
      depressed
      large
      rounded
    >
      {{ $t('RequestInformation') }}
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'SignUp',
  data: () => ({
    email: undefined,
  }),
};
</script>
