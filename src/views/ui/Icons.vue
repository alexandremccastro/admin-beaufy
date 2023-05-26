<template>
  <v-container fluid>
    <Breadcrumb />

    <v-card>
      <v-card-title>
        Material Icons
      </v-card-title>
      <v-divider />

      <v-card-text>
        <p class="mb-4">We recommend use material ui icons with AdminBeaufy.</p>

        <a href="https://pictogrammers.com/library/mdi/" target="_blank">Pictogrammers</a>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default defineComponent({
  name: "IconsPage",
  components: { Breadcrumb }
});
</script>
