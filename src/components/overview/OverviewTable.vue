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
        <tr v-for="(user, index) in users" :key="index" class="text-center">
          <td class="py-2 px-4 border">{{ user.id }}</td>
          <td class="py-2 px-4 border">{{ user.firstName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created(){
    this.getUsers();
  },
  methods : {
    getUsers(){
      fetch('https://dummyjson.com/users?limit=5')
      .then((response) => response.json())
      .then((data) => {
        this.users = data.users;
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
    }
    
  },
};
</script>
