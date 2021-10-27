<template>
  <h3
    class="d-flex align-center font-weight-medium"
    style="cursor: pointer;"
    @click="$router.push({ name: 'Dashboard' })"
  >
    <img
      :class="{ 'mr-3': !mini }"
      width="40"
      src="@/assets/logo.png"
    >
    <span v-if="!mini">OP||MAAT</span>
  </h3>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    mini: {
      type: Boolean,
      default: undefined,
    },
  },
};
</script>
