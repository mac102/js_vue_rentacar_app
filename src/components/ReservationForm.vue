<template>
    <div class="ReservationForm p-5 bg-white w-1/2">
        <input-select :label="'Pickup location'" :options="[
            {
                label: 'New York',
                value: 1
            },
            {
                label: 'Paris',
                value: 2
            },
            {
                label: 'Warsaw',
                value: 3
            }
        ]"/>
    </div>
</template>

<script>
import InputSelect from '@/components/forms/InputSelect';

export default {
    components: {
        InputSelect
    }    
}
</script>
