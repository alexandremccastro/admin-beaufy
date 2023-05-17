<template>
  <v-container>
    <div class="d-flex justify-space-between items-center w-100">
      <h2>Home</h2>
      <v-breadcrumbs :items="['Home']"></v-breadcrumbs>
    </div>

    <v-row>
      <v-col cols="12" sm="12" md="3">
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

      <v-col cols="12" sm="12" md="3">
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

      <v-col cols="12" sm="12" md="3">
        <v-card color="warning">
          <v-card-text class="d-flex justify-space-between">
            <section>
              <v-card-title>250</v-card-title>
              <v-card-subtitle class="text-xl"
                >User Registrations</v-card-subtitle
              >
            </section>

            <v-card-item>
              <v-icon size="50">mdi-account-plus-outline</v-icon>
            </v-card-item>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="3">
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
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
});
</script>
