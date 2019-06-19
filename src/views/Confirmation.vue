<template>
    <div class="container mx-auto pt-8">
        <div class="rounded overflow-hidden shadow-lg p-8">
             <h2 class="mb-0 text-2xl font-bold">Is this information correct</h2>
             <ul class="my-8">
                 <li>Name: <strong>{{user.name}}</strong></li>
                 <li>Surname: <strong>{{user.surname}}</strong></li>
                 <li>Vehicle: <strong>{{vehicle.name}}</strong></li>
                 <li>Pickup: <strong>{{pickup.formatted}}</strong></li>
                 <li>Drop off: <strong>{{dropoff.formatted}}</strong></li>
             </ul>

            <button class="bg-green text-white font-bold py-3 px-4 rounded inline-block" @click="makeReservation">Make reservation</button>

        </div>
    </div>
</template>

<script>
import {DateTime} from 'luxon'

export default {
    computed: {
        user() {
            return this.$store.getters.user
        },
        vehicle() {
            return this.$store.getters.currentVehicle
        },
        pickup() {
            return {
                original: this.$store.getters.pickupDate,
                formatted: DateTime.fromISO(this.$store.getters.pickupDate).toFormat('dd/MM/yyyy')
            }
        },
        dropoff() {
            return {
                original: this.$store.getters.dropOffDate,
                formatted: DateTime.fromISO(this.$store.getters.dropOffDate).toFormat('dd/MM/yyyy')
            }
        }
    },
    methods: {
        makeReservation() {
            //na wypadek gdyby October nie ³yka³ dat: let pickup = DateTime.fromISO(this.pickup.original).toFormat('yyyy-MM-dd HH:mm:ss')
            //let dropoff = DateTime.fromISO(this.dropoff.original).toFormat('yyyy-MM-dd HH:mm:ss')

            const resData = new URLSearchParams()
            resData.append('user_id', this.user.id)
            resData.append('vehicle_id', this.vehicle.id)
            resData.append('pickup', this.pickup.original)
            resData.append('dropoff', this.dropoff.original)

            this.$store.dispatch('makeReservation', resData)
        }
    }
}
</script>
