<template>
  <div class="bg-white h-full w-1/5 p-3">
    <div class="flex w-full justify-between items-center">
      <div>
        <h1 class="text-2xl">blog</h1>
      </div>
      <div class="cursor-pointer">
        <Icon
          icon="icon-park-outline:menu-fold"
          color="gray"
          class="w-6 h-6"
        ></Icon>
      </div>
    </div>
    <div>
      <sidebar-item :menuItems="sideMenu" :productMenu="productMenu"></sidebar-item>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue';
import SidebarItem from './SidebarItem.vue';
import sideMenu from '@/sidebar-option/sidebarMenu';
import productMenu from '@/sidebar-option/productMenu';
export default{
  components: {
    Icon,
    SidebarItem,
  },
  data() {
    return {
      sideMenu, 
      productMenu
    };
  },

}
</script>
