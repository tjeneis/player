<template>
  <v-dialog
    v-model="dialog"
    max-width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-cast</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        {{ $t('CastChromeTab') }}
      </v-card-title>
      <div
        class="pa-4 pt-0"
        v-html="$t('HowToCast')"
      />
      <v-card-actions class="pa-4">
        <v-spacer />
        <v-btn
          depressed
          outlined
          rounded
          @click="dialog = false"
        >
          {{ $t('Close') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'CastModal',
  data: () => ({
    dialog: false,
  }),
};
</script>
