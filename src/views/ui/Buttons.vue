<template>
  <v-container fluid>
    <Breadcrumb />
  </v-container>
</template>
<script lang="ts">
import Breadcrumb from "@/components/Breadcrumb.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonsPage",
  components: { Breadcrumb }
});
</script>
