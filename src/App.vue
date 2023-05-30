<template>
  <v-app>
    <v-layout class="root-container">
      <router-view />

      <snackbar />
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Snackbar from './components/Snackbar.vue';

export default defineComponent({
  name: 'AppRoot',
  components: { Snackbar }
})
</script>
