<template>
  <v-label class="text-body-2 font-weight-medium w-100">{{ label }}</v-label>
  <v-select class="w-100" @click:append-inner="clickAppendInner" :append-icon="appendIcon"
    :append-inner-icon="appendInnerIcon" @click:prepend-inner="clickPrependInner" :prepend-icon="prependIcon"
    :prepend-inner-icon="prependInnerIcon" :rules="rules" :hint="hint" v-model="model" :type="type" variant="solo"
    :density="density" :loading="loading" :items="items" :item-title="itemTitle" :item-value="itemValue"
    :multiple="multiple">

    <template v-slot:selection="{ item, index }">
      <v-chip v-if="multiple" density="compact" :key="index">{{ item.title }}</v-chip>
      <span v-else class="text-body-2">{{ item.title }}</span>
    </template>
  </v-select>
</template>
<script lang="ts">
import { defineComponent } from "vue";
type Density = null | 'default' | 'comfortable' | 'compact';

export interface IDesity {
  default: Density
};

export default defineComponent({
  name: "SelectField",
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
      default: undefined,
    },
    hint: {
      type: String,
      default: ""
    },
    rules: {
      default: () => []
    },
    items: {
      default: () => []
    },
    itemTitle: {
      default: 'title'
    },
    itemValue: {
      default: 'value'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    chips: {
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
