<template>
  <div class="home">
     <div class="HeroBlock bg-gray-500">
         <div class="container mx-auto flex justify-center items-center h-64">
             <reservation-form/>
         </div>
     </div>
     <div class="container mx-auto">
         <vehicle-list filtered />
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
