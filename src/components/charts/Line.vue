<template>
  <v-layout class="h-90">
    <Line :options="chartOptions" :data="data" />
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Line } from 'vue-chartjs'


export default defineComponent({
  name: 'LineChart',
  components: { Line },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
          datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
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