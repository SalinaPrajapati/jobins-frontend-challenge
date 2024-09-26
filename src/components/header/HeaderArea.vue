<template>
    <header class="bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div class="hidden lg:flex lg:flex-1 lg:justify-between lg:items-center">
          <div>Dashboard</div>
          <div class="flex items-center gap-2">
            <Icon icon="octicon:bell-16" class="w-6 h-6" color="gray" />
            <img
              :src="require('@/assets/images/user-default.png')"
              alt="Avatar"
              class="h-10 w-10 rounded-full object-cover bg-white p-1"
            />
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import { Icon } from '@iconify/vue';
  
  export default {
    components: {
      Icon,
    },
    data() {
      return {
        showCard: false,
      };
    },
    methods: {
      toggleCard() {
        this.showCard = !this.showCard;
      },
    },
  };
  </script>
  
  