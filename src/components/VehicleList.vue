<template>
    <div>
        <h1 class="font-bold text-2xl">Vehicle list</h1>

        <ul v-for="(vehicle,index) in vehicles" :key="index">
            <li>
                {{vehicle.name}}
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    computed: {
        vehicles() {
            return this.$store.getters.allVehicles
        }
    },

    mounted() {
        this.$store.dispatch('getVehicles')
    }
}
</script>


