<template>
  <div>
    <h3 class="font-semibold mb-3">Product List</h3>
    <ListProductTable></ListProductTable>
  </div>
</template>
<script>
import ListProductTable from '@/components/product/ListProductTable.vue';
export default{
    components: {
        ListProductTable
    }
}
</script>
