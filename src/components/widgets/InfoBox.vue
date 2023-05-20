<template>
  <v-card class="d-flex pa-2" :loading="loading">
    <v-card-item class="d-flex pa-0 ma-0 mr-3 justify-center rounded pa-4" :class="[color]">
      <v-icon size="large">{{ icon }}</v-icon>
    </v-card-item>

    <v-card-item class="d-flex align-center pa-0 ma-0 h-100">
      <v-card-title class="ma-0 pa-0 text-subtitle-1">{{ label }}</v-card-title>
      <v-card-subtitle class="ma-0 pa-0 text-body-1"><strong>{{ value }}</strong></v-card-subtitle>
    </v-card-item>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InfoBoxWidget',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'bg-green'
    }
  }
})
</script>