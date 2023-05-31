<template>
  <v-radio class="w-100" :hint="hint" v-model="model" :label="label" :color="color" :rules="rules" :density="density"
    :loading="loading" :hide-details="hideDetails" :value="value" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Radio",
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    density: {
      type: String,
      default: 'comfortable'
    },
    label: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    hideDetails: {
      type: Boolean,
      default: false
    },
    modelValue: {
      default: () => []
    },
    value: {
      default: '',
    },
    hint: {
      type: String,
      default: ""
    },
    rules: {
      default: () => []
    },
  },

  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(modelValue: String) {
        this.$emit("update:modelValue", modelValue);
      },
    },
  },
});
</script>
