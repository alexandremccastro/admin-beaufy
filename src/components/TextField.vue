<template>
  <v-text-field
    :append-icon="appendIcon"
    :append-inner-icon="appendInnerIcon"
    :prepend-icon="prependIcon"
    :prepend-inner-icon="prependInnerIcon"
    :label="label"
    v-model="model"
    :type="type"
    variant="solo"
    density="comfortable"
    :loading="loading"
  ></v-text-field>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextField",
  props: {
    appendIcon: {
      type: String,
      default: "",
    },
    appendInnerIcon: {
      type: String,
      default: "",
    },
    prependIcon: {
      type: String,
      default: "",
    },
    prependInnerIcon: {
      type: String,
      default: "",
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
    value: {
      type: String,
      default: "",
    },
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value: String) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>
