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
          class="text-gray-600 mb-4 flex gap-1 items-center bg-white p-3 rounded-2xl w-48 justify-between text-sm"
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
          <th class="py-2 px-4">Date</th>
          <th class="py-2 px-4">Address</th>
          <th class="py-2 px-4">Methods</th>
          <th class="py-2 px-4">Status</th>
          <th class="py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, index) in paginatedUsers"
          :key="index"
          class="text-sm text-center"
        >
          <td class="py-4 px-4">{{ user.id }}</td>
          <td class="py-2 px-4">
            <div class="flex flex-col justify-start">
              <p class="font-semibold text-gray-600">{{ user.firstName }}</p>
              <p class="text-xs">
                {{ user.company.department }}
              </p>
            </div>
          </td>
          <td class="py-2 px-4">{{ user.birthDate }}</td>
          <td class="py-2 px-4">{{ user.address.address }}</td>
          <td class="py-2 px-4">{{ user.ein }}</td>
          <td class="py-2 px-4"><p class="text-yellow-500">Pending</p></td>
          <td class="py-2 px-4">
            <p class="text-blue-500 cursor-pointer">View Details</p>
          </td>
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
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon
  },
  data() {
    return {
      users: [],
      currentPage: 1,
      pageSize: 5,
      totalUsers: 0, 
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalUsers / this.pageSize);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.users.slice(start, start + this.pageSize);
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      fetch('https://dummyjson.com/users?limit=20')
        .then((response) => response.json())
        .then((data) => {
          this.users = data.users;
          this.totalUsers = data.users.length; 
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
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

<style scoped>
/* Add any necessary styles for the pagination buttons */
</style>
