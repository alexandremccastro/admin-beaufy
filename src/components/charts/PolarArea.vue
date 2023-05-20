<template>
  <v-layout class="h-90">
    <PolarArea :options="chartOptions" :data="data" />
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { PolarArea } from 'vue-chartjs'


export default defineComponent({
  name: 'PolarAreaChart',
  components: { PolarArea },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 15],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ]
          }]
        }
      }
    }
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  }
})
</script>