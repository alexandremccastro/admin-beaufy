<template>
  <v-container fluid>
    <Breadcrumb />

    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Quick Example</v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <TextField label="Email" />

            <TextField label="Password" type="password" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import TextField from "@/components/TextField.vue";

export default defineComponent({
  name: "AdvancedElements",
  components: { Breadcrumb, TextField }
});
</script>
