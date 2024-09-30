<template>
  <div class="flex h-screen overflow-hidden">
    <div class="z-[9999]" >
      <SidebarArea/>
    </div>
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <HeaderArea class="fixed top-0 left-0 right-0 z-50" />
      <main class="pt-[60px]"> 
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SidebarArea from '@/components/sidebar/SidebarArea.vue';
import HeaderArea from '@/components/header/HeaderArea.vue';

export default {
  components: { HeaderArea, SidebarArea },
};
</script>

<style scoped>
.relative.z-40 {
  z-index: 40;
}
</style>
