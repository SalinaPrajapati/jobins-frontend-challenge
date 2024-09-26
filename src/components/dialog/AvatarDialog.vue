<template>
  <div class="relative flex justify-center h-80">
    <button
      @click="toggleDropdown"
      class="flex items-center focus:outline-none"
    >
      <div
        class="bg-brown-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl"
      >
        {{ user.initials }}
      </div>
    </button>
    <div
      v-if="isDropdownOpen"
      class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10"
    >
      <div class="p-4 text-center">
        <div
          class="bg-brown-500 rounded-full w-20 h-20 flex items-center justify-center text-white text-3xl mx-auto"
        >
          {{ user.initials }}
        </div>
        <h3 class="mt-2 text-lg font-semibold">{{ user.fullName }}</h3>
        <p class="text-sm text-gray-500">{{ user.email }}</p>
        <hr class="my-3 border-gray-200" />
        <button
          class="w-full text-left text-blue-500 hover:bg-gray-100 py-2 rounded"
        >
          Edit Account
        </button>
        <hr class="my-3 border-gray-200" />
        <button
          class="w-full text-left text-red-500 hover:bg-gray-100 py-2 rounded"
        >
          Disconnect
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      user: {
        initials: 'JD',
        fullName: 'John Doe',
        email: 'john.doe@doe.com',
      },
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
  },
  mounted() {
  // Close the dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!this.$el.contains(event.target)) {
      this.closeDropdown();
    }
  });
},
beforeUnmount() { // Updated lifecycle hook
  document.removeEventListener('click', this.closeDropdown);
},
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
