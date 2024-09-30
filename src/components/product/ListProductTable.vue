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
        <tr v-for="(category, index) in categories" :key="index">
          <td class="p-4 border">{{ category.id }}</td>
          <td class="p-4 border">{{ category.title }}</td>
          <td class="p-4 border">{{ category.category }}</td>
          <td class="p-4 border">{{ category.brand }}</td>
          <td class="p-4 border">{{ category.price }}</td>
          <td class="p-4 border">{{ category.rating }}</td>
          <td class="p-4 border text-sm text-blue-500">View button</td>
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
        fetch('https://dummyjson.com/products?limit=10')
      .then((response) => response.json())
      .then((data) => {
        this.categories = data.products;
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
    }

  },
};
</script>
