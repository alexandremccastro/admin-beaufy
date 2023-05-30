<template>
  <v-layout class="h-85">
    <Scatter :options="chartOptions" :data="data" />
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Scatter } from 'vue-chartjs'


export default defineComponent({
  name: 'ScatterChart',
  components: { Scatter },
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          datasets: [{
            label: 'Scatter Dataset',
            data: [{
              x: -10,
              y: 0
            }, {
              x: 0,
              y: 10
            }, {
              x: 10,
              y: 5
            }, {
              x: 0.5,
              y: 5.5
            }],
            backgroundColor: 'rgb(255, 99, 132)'
          }],
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