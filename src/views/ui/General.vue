<template>
  <v-container>
    <Breadcrumb />
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default defineComponent({
  name: "GeneralPage",
  components: { Breadcrumb }
});
</script>
