<template>
  <div class="bg-blue-100 font-poppins">
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

<style scoped></style>
