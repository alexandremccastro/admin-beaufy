
<template>
  <div class="d-flex justify-space-between items-center w-100">
    <h6 class="text-h6">{{ routeName }}</h6>
    <v-breadcrumbs :items="Array.from(matched)"></v-breadcrumbs>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'Breadcrumb',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      routeName: '',
      matched: new Set(['Home'])
    }
  },

  created() {
    this.routeName = this.$route.name

    this.$route.matched.map((route) => {
      if (route.name) this.matched.add(route.name)
    })
  }
})
</script>