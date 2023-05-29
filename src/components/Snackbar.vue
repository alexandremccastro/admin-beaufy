<template>
  <template v-for="({ message, color, variant }, idx) in notifications" :key="idx">
    <v-snackbar absolute origin="bottom left" :color="color" :attach="false" :variant="variant"
      v-model="notifications[idx].show" timeout="2000">{{ message }}</v-snackbar>
  </template>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapWritableState } from 'pinia';
import { snackbarStore } from '@/store/snackbars';

export default defineComponent({
  name: 'Snackbars',

  computed: {
    ...mapWritableState(snackbarStore, ['notifications'])
  },
  methods: {
    ...mapActions(snackbarStore, ['pushNotification'])
  }
})
</script>