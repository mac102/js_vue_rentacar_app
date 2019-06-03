<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios';

export default {
  name: 'home',
  mounted() {
      axios.get('http://localhost/vuerentcar/api/vehicles').then(response => {
          console.log(response);
      })
  }
}
</script>
