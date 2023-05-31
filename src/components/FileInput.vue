<template>
  <v-label class="text-body-2 font-weight-medium w-100">{{ label }}</v-label>
  <v-file-input class="w-100" @click.stop:append-inner="clickAppendInner" :append-icon="appendIcon"
    :append-inner-icon="appendInnerIcon" @click.stop="clickPrependInner" :prepend-icon="prependIcon"
    :prepend-inner-icon="prependInnerIcon" :hint="hint" v-model="model" :multiple="multiple" :rules="rules" variant="solo"
    :density="density" :loading="loading">

    <template v-slot:selection="{ fileNames }">
      <template v-for="(fileName, index) in fileNames" :key="index">
        <v-chip density="compact" class="mr-2">{{ fileName }}</v-chip>
      </template>
    </template>
  </v-file-input>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FileInput",
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
      default: () => { }
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
      default: () => { }
    },
    label: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      default: () => '',
    },
    hint: {
      type: String,
      default: ""
    },
    rules: {
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: true
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
