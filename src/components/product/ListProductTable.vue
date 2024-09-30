<template>
  <div>
    <div class="flex w-full items-center text-sm">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <div
            class="text-gray-600 mb-4 flex gap-1 items-center bg-white p-3 rounded-2xl w-36 justify-between"
          >
            Status :<Icon icon="mdi:arrow-down-drop" class="w-6 h-6" />
          </div>
          <div class="relative text-gray-600 mb-4 flex items-center">
            <input
              type="text"
              class="border rounded-2xl p-3 pr-10 w-full"
              name="fname"
              placeholder="Search"
            />
            <Icon
              icon="bx:search"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
            />
          </div>
        </div>
        <div
          class="text-gray-600 mb-4 flex gap-1 items-center bg-white p-3 rounded-2xl w-48 justify-between"
        >
          Filter by data range<Icon
            icon="mdi:arrow-down-drop"
            class="w-6 h-6"
          />
        </div>
      </div>
    </div>

    <table class="min-w-full bg-white rounded-2xl">
      <thead class="rounded-2xl font-light">
        <tr class="bg-gray-100 font-light text-gray-600 rounded-2xl">
          <th class="py-2 px-4">ID.</th>
          <th class="py-2 px-4">Name</th>
          <th class="py-2 px-4">Category</th>
          <th class="py-2 px-4">Brand</th>
          <th class="py-2 px-4">Price</th>
          <th class="py-2 px-4">Rating</th>
          <th class="py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in paginatedProducts" :key="index">
          <td class="p-4 border">{{ product.id }}</td>
          <td class="p-4 border">{{ product.title }}</td>
          <td class="p-4 border">{{ product.category }}</td>
          <td class="p-4 border">{{ product.brand }}</td>
          <td class="p-4 border">{{ product.price }}</td>
          <td class="p-4 border">{{ product.rating }}</td>
          <td class="p-4 border text-sm text-blue-500">View button</td>
        </tr>
      </tbody>
    </table>

    <div class="flex justify-between mt-4 bg-white p-3 rounded-2xl">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="p-2 bg-gray-200 rounded-lg"
      >
        Previous
      </button>
      <span> Page {{ currentPage }} of {{ totalPages }} </span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="p-2 bg-gray-200 rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      currentPage: 1,
      pageSize: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.categories.length / this.pageSize);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.categories.slice(start, start + this.pageSize);
    }
  },
  created(){
    this.getProductlist();
  },
  methods: {
    getProductlist(){
      fetch('https://dummyjson.com/products?limit=20')
      .then((response) => response.json())
      .then((data) => {
        this.categories = data.products;
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>
