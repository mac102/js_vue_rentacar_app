<template>
  <div class="Vehicle rounded overflow-hidden mb-4 border p-4">
      <div class="flex">
            <div class="w-1/3">
                <div class="font-bold text-xl mb-2">{{ name }}</div>
            </div>
            <div class="bg-white w-1/3">
                <img :src="image" alt="Car thumbnail">
            </div>

            <div class="w-1/3 text-right">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${{price}}/day</span>
            </div>
      </div>
      <div class="flex justify-between border-t items-center mt-2 pt-4">
            <router-link :to="{ name: 'vehicleDetail', params: {slug:slug}}">More details</router-link>
            <availability-badge :available="available" />
       </div>
    </div>
</template>

<script>

import AvailabilityBadge from '@/components/AvailabilityBadge';

export default {
    components: {
        AvailabilityBadge
    },
    props: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: null
        },
        price: {
            type: Number,
            default: null
        },
        available: {
            type: Number,
            default: 1
        },
        slug: {
            type: String,
            default: ''
        }
    }
}
</script>

