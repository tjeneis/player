<template>
  <v-card
    class="pa-8"
    color="default"
    elevation="0"
  >
    <h2 class="mb-3">
      {{ $t('Login') }}
    </h2>
    <v-text-field
      id="username"
      v-model="username"
      class="mb-3"
      hide-details="auto"
      outlined
      :placeholder="$t('Username')"
    />
    <v-text-field
      id="password"
      v-model="password"
      class="mb-3"
      hide-details="auto"
      outlined
      :placeholder="$t('Password')"
      type="password"
    />
    <v-checkbox
      v-model="rememberMe"
      :label="$t('RememberMe')"
    />
    <v-row dense>
      <v-col
        cols="12"
        md="6"
      >
        <v-btn
          block
          color="primary"
          depressed
          large
          rounded
          to="/dashboard"
        >
          {{ $t('Login') }}
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-btn
          block
          depressed
          large
          outlined
          rounded
          text
        >
          {{ $t('ForgotPasswordOrUsername') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    password: undefined,
    rememberMe: false,
  }),
  computed: {
    username: {
      set(val) {
        this.$store.dispatch('setUsername', val);
      },
      get() {
        return this.$store.state.username;
      },
    },
  },
};
</script>
