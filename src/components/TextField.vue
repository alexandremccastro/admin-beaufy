<template>
  <v-label class="text-body-2 font-weight-medium w-100">{{ label }}</v-label>
  <v-text-field class="w-100" @click:append-inner="clickAppendInner" :append-icon="appendIcon"
    :append-inner-icon="appendInnerIcon" @click:prepend-inner="clickPrependInner" :prepend-icon="prependIcon"
    :prepend-inner-icon="prependInnerIcon" :rules="rules" :hint="hint" v-model="model" :type="type" variant="solo"
    :density="density" :loading="loading" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
type Density = null | 'default' | 'comfortable' | 'compact';

export interface IDesity {
  default: Density
};

export default defineComponent({
  name: "TextField",
  props: {
    density: {
      type: String,
      default: 'compact'
    },
    appendIcon: {
      type: String,
      default: "",
    },
    appendInnerIcon: {
      type: String,
      default: "",
    },
    clickAppendInner: {
      default: undefined
    },
    prependIcon: {
      type: String,
      default: "",
    },
    prependInnerIcon: {
      type: String,
      default: "",
    },
    clickPrependInner: {
      default: undefined
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    hint: {
      type: String,
      default: ""
    },
    rules: {
      default: () => []
    }
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
