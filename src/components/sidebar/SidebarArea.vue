<template>
  <div
    :class="['bg-white h-full transition-all duration-300 p-3', { 'w-fit': isOpen, 'w-24': !isOpen }]"
  >
    <div class="flex w-full justify-between items-center">
      <div class="flex items-center">
        <Icon icon="fluent-emoji:star-and-crescent" class="w-10 h-10" />
        <h1 v-if="isOpen" class=" ml-2 text-2xl font-semibold">JoBins</h1>
      </div>
      <div class="cursor-pointer" @click="toggleSidebar">
        <Icon
          :icon="isOpen ? 'icon-park-outline:menu-fold' : 'icon-park-outline:menu-unfold'"
          color="gray"
          class="w-6 h-6"
        ></Icon>
      </div>
    </div>
    <div>
      <sidebar-item :menuItems="sideMenu" :productMenu="productMenu" :isOpen="isOpen"></sidebar-item>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import SidebarItem from './SidebarItem.vue';
import sideMenu from '@/sidebar-option/sidebarMenu';
import productMenu from '@/sidebar-option/productMenu';

export default {
  components: {
    Icon,
    SidebarItem,
  },
  data() {
    return {
      sideMenu,
      productMenu,
      isOpen: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
}
</script>
