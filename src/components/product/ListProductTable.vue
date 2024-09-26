<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-4">Product Categories</h2>
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="py-2 px-4 border">S.N.</th>
          <th class="py-2 px-4 border">Category</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(category, index) in categories"
          :key="index"
          class="text-center"
        >
          <td class="py-2 px-4 border">{{ category.id }}</td>
          <td class="py-2 px-4 border">{{ category.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  created(){
    this.getProductlist()
  },
  methods: {
    getProductlist(){
        fetch('https://dummyjson.com/products/')
      .then((response) => response.json())
      .then((data) => {
        this.categories = data.products;
        console.log(this.categories)
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
    }

  },
};
</script>
