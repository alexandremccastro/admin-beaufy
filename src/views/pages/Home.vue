<template>
  <v-container fluid>
    <div class="d-flex justify-space-between items-center w-100">
      <h2>Home</h2>
      <v-breadcrumbs :items="['Home']"></v-breadcrumbs>
    </div>

    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-card color="info">
          <v-card-text class="d-flex justify-space-between">
            <section>
              <v-card-title>150</v-card-title>
              <v-card-subtitle class="text-xl">New Orders</v-card-subtitle>
            </section>

            <v-card-item>
              <v-icon size="50">mdi-shopping-outline</v-icon>
            </v-card-item>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card color="success">
          <v-card-text class="d-flex justify-space-between">
            <section>
              <v-card-title>53%</v-card-title>
              <v-card-subtitle class="text-xl">Bounce Rate</v-card-subtitle>
            </section>

            <v-card-item>
              <v-icon size="50">mdi-finance</v-icon>
            </v-card-item>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card color="warning">
          <v-card-text class="d-flex justify-space-between">
            <section>
              <v-card-title>250</v-card-title>
              <v-card-subtitle class="text-xl">User Registrations</v-card-subtitle>
            </section>

            <v-card-item>
              <v-icon size="50">mdi-account-plus-outline</v-icon>
            </v-card-item>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-card color="red">
          <v-card-text class="d-flex justify-space-between">
            <section>
              <v-card-title>27</v-card-title>
              <v-card-subtitle class="text-xl">Unique Visitors</v-card-subtitle>
            </section>

            <v-card-item>
              <v-icon size="50">mdi-chart-line-variant</v-icon>
            </v-card-item>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Something</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table hover no-footer="true" density="comfortable" v-model:items-per-page="itemsPerPage"
              :headers="headers" :items-length="totalItems" :items="serverItems" :loading="loading" item-value="name"
              @update:options="loadItems">
              <template v-slot:bottom>
                <v-pagination class="my-2" rounded="true" density="comfortable"> </v-pagination>

                <!-- Leave the slot content empty to hide the default footer -->
              </template></v-data-table>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";

const desserts = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: '1',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: '0',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: '6',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: '7',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: '16',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: '1',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: '2',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: '8',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: '45',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: '22',
  },
]

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }: any) {
    return new Promise(resolve => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage
        const end = start + itemsPerPage
        const items = desserts.slice()

        if (sortBy.length) {
          const sortKey = sortBy[0].key
          const sortOrder = sortBy[0].order
          items.sort((a: any, b: any) => {
            const aValue = a[sortKey]
            const bValue = b[sortKey]
            return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
          })
        }

        const paginated = items.slice(start, end)

        resolve({ items: paginated, total: items.length })
      }, 500)
    })
  },
}

export default defineComponent({
  name: "HomePage",

  data() {
    return {
      itemsPerPage: 10,
      headers: [
        {
          title: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        { title: 'Calories', key: 'calories', align: 'end' },
        { title: 'Fat (g)', key: 'fat', align: 'end' },
        { title: 'Carbs (g)', key: 'carbs', align: 'end' },
        { title: 'Protein (g)', key: 'protein', align: 'end' },
        { title: 'Iron (%)', key: 'iron', align: 'end' },
      ],
      serverItems: [],
      loading: true,
      totalItems: 10,
    }
  },
  methods: {
    loadItems({ page, itemsPerPage, sortBy }: any) {
      this.loading = true
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }: any) => {
        this.serverItems = items
        this.totalItems = total
        this.loading = false
      })
    },
  },
});
</script>
