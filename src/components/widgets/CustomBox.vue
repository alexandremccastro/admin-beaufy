<template>
  <v-card :color="color" :loading="loading">
    <v-card-text class="d-flex justify-space-between">
      <section>
        <v-card-title>{{ value }}</v-card-title>
        <v-card-subtitle class="text-xl">{{ label }}</v-card-subtitle>
      </section>

      <v-card-item>
        <v-icon size="50">{{ icon }}</v-icon>
      </v-card-item>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomBoxWidget',
  props: {
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
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
      default: ''
    }
  }
})
</script>