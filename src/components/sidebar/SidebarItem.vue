<template>
  <div class="w-64 h-screen p-4 flex flex-col gap-16 text-gray-500">
    <div>
      <p class="my-3">Main Menu</p>
      <ul>
        <li v-for="(menu, index) in drawerItems" :key="index">
          <router-link
            v-if="menu.to"
            :to="menu.to"
            class="flex items-center px-2 py-3 space-x-3 cursor-pointer hover:bg-gray-200 rounded-2xl"
            active-class="bg-gray-300"
          >
            <Icon :icon="menu.icon" class="w-6 h-6" />
            <span>{{ menu.title }}</span>
          </router-link>
          <div
            v-else
            class="flex items-center p-2 space-x-3 cursor-pointer hover:bg-gray-200 rounded-2xl"
          >
            <Icon :icon="menu.icon" class="w-6 h-6" />
            <span>{{ menu.title }}</span>
          </div>
          <ul v-if="menu.children">
            <li v-for="(child, childIndex) in menu.children" :key="childIndex">
              <router-link
                :to="child.to"
                class="flex items-center px-2 py-3 pl-6 space-x-3 cursor-pointer hover:bg-gray-200 rounded-2xl"
                active-class="bg-gray-300"
              >
                <Icon :icon="menu.icon" class="w-6 h-6" />
                <span>{{ child.title }}</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <p class="mb-3">Product Menu</p>
      <ul>
        <li v-for="(menu, index) in productItems" :key="index">
          <router-link
            v-if="menu.to"
            :to="menu.to"
            class="flex items-center px-2 py-3 space-x-3 cursor-pointer hover:bg-gray-200 rounded-2xl"
            active-class="bg-gray-300"
          >
            <Icon :icon="menu.icon" class="w-6 h-6" />
            <span>{{ menu.title }}</span>
          </router-link>
          <div
            v-else
            class="flex items-center p-2 space-x-3 cursor-pointer hover:bg-gray-200 rounded-2xl"
          >
            <Icon :icon="menu.icon" class="w-6 h-6" />
            <span>{{ menu.title }}</span>
          </div>
          <ul v-if="menu.children">
            <li v-for="(child, childIndex) in menu.children" :key="childIndex">
              <router-link
                :to="child.to"
                class="flex items-center px-2 py-3 pl-6 space-x-3 cursor-pointer hover:bg-gray-200 rounded-2xl"
                active-class="bg-gray-300"
              >
                <Icon :icon="child.icon" size="20px" />
                <span>{{ child.title }}</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import sideMenu from '@/sidebar-option/sidebarMenu';
import productMenu from '@/sidebar-option/productMenu';

export default {
  name: 'SidebarItem',
  components: {
    Icon,
  },
  data() {
    return {
      drawerItems: [],
      productItems: []
    };
  },
  created() {
    this.drawerItems = sideMenu;
    this.productItems = productMenu
    console.log(this.productItems)
  }
};
</script>
