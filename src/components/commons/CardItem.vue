<template>
  <div class="rounded overflow-hidden shadow-md bg-white">
    <img
      v-if="image"
      :src="image"
      alt="Card Image"
      class="w-full h-48 object-cover"
    />
    <div class="px-6 py-4">
      <div class="text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    image: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: 'Learn More',
    },
  },
  methods: {
    handleClick() {
      this.$emit('cardClick');
    },
  },
};
</script>

<style scoped>
/* You can add additional styles if needed */
</style>
