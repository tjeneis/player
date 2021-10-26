<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
        <login />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
        <sign-up />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';

export default {
  name: 'Home',
  components: {
    Login,
    SignUp,
  },
};
</script>
