<template>
  <div class="my-component font-poppins">
    <default-layout>
      <router-view></router-view>
    </default-layout>
  </div>
</template>
<script>
import defaultLayout from "./layouts/defaultLayout.vue";
export default {
  components : {
    defaultLayout
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #d4e6f1;

.my-component {
  background-color: $primary-color;
}
</style>
