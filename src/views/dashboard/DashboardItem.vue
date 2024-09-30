<template>
  <div class="flex flex-col gap-10">
    <OverviewStats></OverviewStats>
    <OverviewInformation></OverviewInformation>
    <OverviewTable></OverviewTable>
  </div>
</template>
<script>
import OverviewInformation from '@/components/overview/OverviewInformation.vue';
import OverviewStats from '@/components/overview/OverviewStats.vue';
import OverviewTable from '@/components/overview/OverviewTable.vue';

export default{
    components: {
        OverviewStats,
        OverviewInformation,
        OverviewTable
    }
}
</script>
