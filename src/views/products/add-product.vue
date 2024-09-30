<template>
  <div>
    <h3 class="font-semibold mb-3">Add Product</h3>
    <add-product-form></add-product-form>
  </div>
</template>
<script>
import AddProductForm from '@/components/product/AddProductForm.vue';
export default{
    components: {
      AddProductForm
    }
}
</script>
