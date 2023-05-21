<template>
  <v-container fluid>
    <Breadcrumb />

    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-card height="400">
          <v-card-title>Bar Chart</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="h-100">
            <Bar :data="barChartData" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-card height="400">
          <v-card-title>Polar Area Chart</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="h-100">
            <PolarArea :data="polarChartData" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-card height="400">
          <v-card-title>Doughnut Chart</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="h-100">
            <Doughnut :data="doughnutChartData" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-card height="400">
          <v-card-title>Line Chart</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="h-100">
            <Line :data="lineChartData" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-card height="400">
          <v-card-title>Scatter Chart</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="h-100">
            <Scatter :data="scatterData" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-card height="400">
          <v-card-title>Radar Chart</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="h-100">
            <Radar :data="radarChartData" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Breadcrumb from "@/components/Breadcrumb.vue";
import { defineComponent } from "vue";
import Bar from "@/components/charts/Bar.vue";
import PolarArea from "@/components/charts/PolarArea.vue";
import Doughnut from "@/components/charts/Doughnut.vue";
import Line from "@/components/charts/Line.vue";
import Scatter from "@/components/charts/Scatter.vue";
import Radar from '@/components/charts/Radar.vue'

export default defineComponent({
  name: "ChartsPage",
  components: { Breadcrumb, Bar, PolarArea, Doughnut, Line, Scatter, Radar },

  data() {
    return {
      barChartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
          { label: 'Data One', backgroundColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)'], data: [40, 20, 12] },
          { label: 'Data Two', backgroundColor: ['rgb(54, 162, 235)', 'rgb(201, 203, 207)', 'rgb(201, 203, 207)'], data: [40, 20, 12] }
        ],
      },
      polarChartData: {
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
      },
      radarChartData: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
      scatterData: {
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
      },
      lineChartData: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      doughnutChartData: {
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
});
</script>
