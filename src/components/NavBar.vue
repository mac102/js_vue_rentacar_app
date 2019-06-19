<template>
  <nav class="bg-gray-900 ">
    <div class="container mx-auto flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-bold text-3xl tracking-tight">Rennter</span>
        </div>
        <div class="block lg:hidden">
        <button
            class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </button>
        </div>
        <div class="ml-auto">
        <div class="text-lg lg:flex-grow">
            <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-pink mr-4 no-underline">Home</router-link>
            <router-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-pink mr-4 no-underline">About</router-link>
            <button class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-wite mr-4 text-pink no-underline" @click="logout">Logout</button>
        </div>
        </div>
    </div>
  </nav>
</template>


<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }
}
</script>
