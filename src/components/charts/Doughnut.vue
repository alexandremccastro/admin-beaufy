<template>
  <v-layout class="h-90">
    <Doughnut :options="chartOptions" :data="data" />
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Doughnut } from 'vue-chartjs'


export default defineComponent({
  name: 'DoughnutChart',
  components: { Doughnut },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
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