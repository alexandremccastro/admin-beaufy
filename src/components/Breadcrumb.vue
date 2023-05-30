
<template>
  <div class="d-flex mb-0 justify-space-between align-center w-100">
    <!-- <h5 class="text-h6 ma-0 pa-0">{{ routeName }}</h5> -->
    <!-- <v-breadcrumbs class="ma-0 pa-0" :items="Array.from(matched)"></v-breadcrumbs> -->
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