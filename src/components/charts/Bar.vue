
<template>
  <v-layout class="h-90">
    <Bar :options="chartOptions" :data="data" />
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Bar } from 'vue-chartjs'



export default defineComponent({
  name: 'BarChart',
  components: { Bar },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          labels: ['January', 'February', 'March'],
          datasets: [
            { label: 'Data One', backgroundColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)'], data: [40, 20, 12] },
            { label: 'Data Two', backgroundColor: ['rgb(54, 162, 235)', 'rgb(201, 203, 207)', 'rgb(201, 203, 207)'], data: [40, 20, 12] }
          ],
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