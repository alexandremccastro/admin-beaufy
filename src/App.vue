<template>
  <v-layout class="bg-grey-lighten-4">
    <router-view />

    <snackbar />
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Snackbar from './components/Snackbar.vue';

export default defineComponent({
  name: 'AppRoot',
  components: { Snackbar }
})
</script>
