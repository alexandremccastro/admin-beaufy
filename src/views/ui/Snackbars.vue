<template>
  <v-container fluid>
    <Breadcrumb />

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Variants</v-card-title>
          <v-divider />

          <v-card-text>
            <v-layout class="d-flex justify-space-between">
              <v-btn @click="pushMessage('')">Normal</v-btn>
              <v-btn color="primary" @click="pushMessage('primary')">Primary</v-btn>
              <v-btn color="warning" @click="pushMessage('warning')">Warning</v-btn>
              <v-btn color="secondary" @click="pushMessage('secondary')">Secondary</v-btn>
              <v-btn color="success" @click="pushMessage('success')">Success</v-btn>
              <v-btn color="red" @click="pushMessage('red')">Danger</v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { mapActions, mapWritableState } from "pinia";
import { snackbarStore } from "@/store/snackbars";

export default defineComponent({
  name: "SnackbarsPage",
  components: { Breadcrumb },

  data() {
    return {}
  },

  computed: {
    ...mapWritableState(snackbarStore, ['notifications'])
  },

  methods: {
    ...mapActions(snackbarStore, ["pushNotification"]),
    pushMessage(color: string) {
      this.pushNotification({ message: color, color, timeout: 2000 })
    }
  }
});

</script>
<style>
.custom-snackbar {
  bottom: 400px
}
</style>
