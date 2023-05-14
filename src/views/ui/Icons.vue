<template>
  <v-container>
    <div class="d-flex justify-space-between items-center w-100">
      <h2>Icons</h2>
      <v-breadcrumbs :items="['Home', 'Icons']"></v-breadcrumbs>
    </div>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconsPage",
});
</script>
