<template>
  <div class="home">
      <vehicle-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomButton from '@/components/Button'
import VehicleList from '@/components/VehicleList'

export default {
  name: 'home',
  components: {
      CustomButton,
      VehicleList
  }
}
</script>
