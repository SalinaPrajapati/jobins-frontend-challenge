<template>
  <div class="grid grid-cols-3 w-full gap-4">
    <div class="w-full p-2 bg-white shadow-lg rounded-2xl">
      <div class="flex items-center gap-2">
        <div class="w-[30%]">
          <img
            :src="require('@/assets/images/barchart.png')"
            alt="Avatar"
            class="object-cover w-full h-full p-1"
          />
        </div>
        <p class="border border-r-2 border-gray-400"></p>
        <div class="px-6 py-4">
          <div class="flex flex-col gap-3">
            <div>
              <p class="mb-1 text-md font-semibold text-gray-700">
                Total sale and Cost
              </p>
              <p class="text-sm text-gray-500">Last 7 days</p>
            </div>
            <div>
              <p class="mb-1 text-xl font-semibold">$350k</p>
              <p class="flex items-center gap-1 text-sm text-gray-500">
                <span class="flex items-center gap-1 text-green-500">
                  <Icon icon="icon-park-outline:arrow-up" class="w-4 h-4"></Icon
                  >8.56k
                </span>
                vs last 7 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-2 bg-white shadow-lg rounded-2xl">
      <div class="flex flex-col gap-2 item-s-center">
        <div class="flex items-center gap-5">
          <div>
            <Icon icon="emojione-v1:stock-chart" class="w-16 h-16" />
          </div>
          <div>
            <p class="text-md font-semibold text-gray-700">Total Profit</p>
            <p>Last 7 days</p>
          </div>
        </div>
        <div class="px-1 py-4">
          <div class="flex flex-col gap-3">
            <div>
              <p class="mb-1 text-xl font-semibold">$50k</p>
              <p class="flex items-center gap-1 text-sm text-gray-500">
                <span class="flex items-center gap-1 text-green-500">
                  <Icon icon="icon-park-outline:arrow-up" class="w-4 h-4"></Icon
                  >12%
                </span>
                vs last 7 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-white shadow-lg rounded-2xl">
      <div class="flex flex-col gap-3">
        <div class="flex flex-wrap p-4">
          <div class="flex w-full items-center gap-2">
            <div class="flex w-full items-center gap-4 mb-2">
              <Icon icon="emojione:flag-for-united-states" class="w-10 h-10" />
              <div>
                <h2 class="text-md font-semibold">30k</h2>
                <p class="text-xs">United States</p>
              </div>
            </div>
            <div class="w-full flex items-center gap-1">
              <ProgressBar :progress="25.5" />
              <p class="text-green-500 text-xs flex items-center w-fit">
                <Icon icon="bxs:up-arrow" class="w-2 h-2" /><span>25.5"%</span>
              </p>
            </div>
          </div>
          <div class="flex w-full items-center gap-2">
            <div class="flex w-full items-center gap-4 mb-2">
              <Icon icon="emojione:flag-for-brazil" class="w-10 h-10" />
              <div>
                <h2 class="text-md font-semibold">26k</h2>
                <p class="text-xs">Brazil</p>
              </div>
            </div>
            <div class="w-full flex items-center gap-1">
              <ProgressBar :progress="16.8" />
              <p class="text-red-500 text-xs flex items-center w-fit">
                <Icon icon="mdi:arrow-down-drop" class="w-4 h-4" /><span
                  >16.8"%</span
                >
              </p>
            </div>
          </div>
          <div class="flex w-full items-center gap-2">
            <div class="flex w-full items-center gap-4">
              <Icon icon="emojione:flag-for-australia" class="w-10 h-10" />
              <div>
                <h2 class="text-md font-semibold">17k</h2>
                <p class="text-xs">Australia</p>
              </div>
            </div>
            <div class="w-full flex items-center gap-1">
              <ProgressBar :progress="11.2" />
              <p class="text-red-500 text-xs flex items-center w-fit">
                <Icon icon="mdi:arrow-down-drop" class="w-4 h-4" />
                11.2%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue';
import ProgressBar from '../commons/ProgressBar.vue';
export default{
  components: {
    Icon,
    ProgressBar
  },

}
</script>
