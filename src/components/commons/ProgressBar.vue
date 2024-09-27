<template>
  <div class="h-2 relative w-full max-w-xl rounded-full overflow-hidden">
    <div class="w-full h-2 bg-gray-200 absolute"></div>
    <div
      :style="barStyle"
      class="transition-all ease-out duration-1000 h-2 bg-blue-500 relative"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
      validator(value) {
        return value >= 0 && value <= 100;
      },
    },
  },
  computed: {
    barStyle() {
      return {
        width: `${this.progress}%`,
      };
    },
  },
};
</script>
