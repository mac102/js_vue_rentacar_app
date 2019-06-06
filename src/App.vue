<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
export default {
    components: {
        NavBar
    }
}
</script>
