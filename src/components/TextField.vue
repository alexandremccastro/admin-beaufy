<template>
  <v-label class="text-body-2 font-weight-medium w-100">{{ label }}</v-label>
  <v-text-field class="w-100" @click:append-inner="clickAppendInner" :append-icon="appendIcon"
    :append-inner-icon="appendInnerIcon" @click:prepend-inner="clickPrependInner" :prepend-icon="prependIcon"
    :prepend-inner-icon="prependInnerIcon" v-model="model" :type="type" variant="solo-filled" density="compact"
    :loading="loading" />
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
    value: {
      type: String,
      default: "",
    },
  },

  created() {
    console.log(this)
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
