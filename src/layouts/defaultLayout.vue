<template>
  <div class="flex h-screen overflow-hidden">
    <SidebarArea />
    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <HeaderArea />
      <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import SidebarArea from '@/components/sidebar/SidebarArea.vue'
import HeaderArea from '@/components/header/HeaderArea.vue'
export default {
    components: {  HeaderArea, SidebarArea },
}
</script>
