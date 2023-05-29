<template>
  <v-container fluid>
    <Breadcrumb />

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Default</v-card-title>
          <v-divider />

          <v-card-text>
            <v-layout class="d-flex justify-space-between">
              <v-btn @click="pushMessage('common')">Common</v-btn>
              <v-btn color="primary" @click="pushMessage('primary')">Primary</v-btn>
              <v-btn color="warning" @click="pushMessage('warning')">Warning</v-btn>
              <v-btn color="secondary" @click="pushMessage('secondary')">Secondary</v-btn>
              <v-btn color="success" @click="pushMessage('success')">Success</v-btn>
              <v-btn color="red" @click="pushMessage('red')">Danger</v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title>Outlined</v-card-title>
          <v-divider />

          <v-card-text>
            <v-layout class="d-flex justify-space-between">
              <v-btn variant="outlined" @click="pushMessage('common', 'outlined')">Common</v-btn>
              <v-btn variant="outlined" color="primary" @click="pushMessage('primary', 'outlined')">Primary</v-btn>
              <v-btn variant="outlined" color="warning" @click="pushMessage('warning', 'outlined')">Warning</v-btn>
              <v-btn variant="outlined" color="secondary" @click="pushMessage('secondary', 'outlined')">Secondary</v-btn>
              <v-btn variant="outlined" color="success" @click="pushMessage('success', 'outlined')">Success</v-btn>
              <v-btn variant="outlined" color="red" @click="pushMessage('red', 'outlined')">Danger</v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title>Tonal</v-card-title>
          <v-divider />

          <v-card-text>
            <v-layout class="d-flex justify-space-between">
              <v-btn variant="tonal" @click="pushMessage('common', 'tonal')">Common</v-btn>
              <v-btn variant="tonal" color="primary" @click="pushMessage('primary', 'tonal')">Primary</v-btn>
              <v-btn variant="tonal" color="warning" @click="pushMessage('warning', 'tonal')">Warning</v-btn>
              <v-btn variant="tonal" color="secondary" @click="pushMessage('secondary', 'tonal')">Secondary</v-btn>
              <v-btn variant="tonal" color="success" @click="pushMessage('success', 'tonal')">Success</v-btn>
              <v-btn variant="tonal" color="red" @click="pushMessage('red', 'tonal')">Danger</v-btn>
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
    pushMessage(color: string, variant = undefined) {
      this.pushNotification({ message: color, color, variant, timeout: 2000 })
    }
  }
});

</script>
