<template>
  <div class="home">
     <div class="HeroBlock bg-gray-500 h-screen">
         <div class="container mx-auto flex justify-center items-center h-screen">
             <reservation-form/>
         </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomButton from '@/components/Button'
import VehicleList from '@/components/VehicleList'
import ReservationForm from '@/components/ReservationForm'

export default {
  name: 'home',
  components: {
      CustomButton,
      VehicleList,
      ReservationForm
  }
}
</script>
