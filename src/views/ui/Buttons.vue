<template>
  <v-container fluid>
    <Breadcrumb />

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>All Densities</v-card-title>
          <v-divider />
          <v-card-text>
            <v-table density="comfortable" class=" text-center">
              <thead>
                <th>Compact</th>
                <th>Default</th>
                <th>Confortable</th>
              </thead>

              <tbody>
                <tr>
                  <td><v-btn density="compact" width="150">Default</v-btn></td>
                  <td><v-btn density="default" width="150">Default</v-btn></td>
                  <td><v-btn density="comfortable" width="150">Default</v-btn></td>
                </tr>

                <tr>
                  <td><v-btn color="primary" density="compact" width="150">Primary</v-btn></td>
                  <td><v-btn color="primary" density="default" width="150">Primary</v-btn></td>
                  <td><v-btn color="primary" density="comfortable" width="150">Primary</v-btn></td>
                </tr>

                <tr>
                  <td><v-btn color="secondary" density="compact" width="150">Secondary</v-btn></td>
                  <td><v-btn color="secondary" density="default" width="150">Secondary</v-btn></td>
                  <td><v-btn color="secondary" density="comfortable" width="150">Secondary</v-btn></td>
                </tr>

                <tr>
                  <td><v-btn color="warning" density="compact" width="150">Warning</v-btn></td>
                  <td><v-btn color="warning" density="default" width="150">Warning</v-btn></td>
                  <td><v-btn color="warning" density="comfortable" width="150">Warning</v-btn></td>
                </tr>

                <tr>
                  <td><v-btn color="info" density="compact" width="150">Info</v-btn></td>
                  <td><v-btn color="info" density="default" width="150">Info</v-btn></td>
                  <td><v-btn color="info" density="comfortable" width="150">Info</v-btn></td>
                </tr>

                <tr>
                  <td><v-btn color="success" density="compact" width="150">Success</v-btn></td>
                  <td><v-btn color="success" density="default" width="150">Success</v-btn></td>
                  <td><v-btn color="success" density="comfortable" width="150">Success</v-btn></td>
                </tr>


              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title>Outlined</v-card-title>
          <v-divider />
          <v-card-text>
            <v-table density="comfortable" class=" text-center">
              <thead>
                <th>Compact</th>
                <th>Default</th>
                <th>Confortable</th>
              </thead>

              <tbody>
                <tr>
                  <td><v-btn variant="outlined" density="compact" width="150">Default</v-btn></td>
                  <td><v-btn variant="outlined" density="default" width="150">Default</v-btn></td>
                  <td><v-btn variant="outlined" density="comfortable" width="150">Default</v-btn></td>
                </tr>

                <tr>
                  <td><v-btn variant="outlined" color="primary" density="compact" width="150">Primary</v-btn></td>
                  <td><v-btn variant="outlined" color="primary" density="default" width="150">Primary</v-btn></td>
                  <td><v-btn variant="outlined" color="primary" density="comfortable" width="150">Primary</v-btn></td>
                </tr>

                <tr>
                  <td><v-btn variant="outlined" color="secondary" density="compact" width="150">Secondary</v-btn></td>
                  <td><v-btn variant="outlined" color="secondary" density="default" width="150">Secondary</v-btn></td>
                  <td><v-btn variant="outlined" color="secondary" density="comfortable" width="150">Secondary</v-btn></td>
                </tr>

                <tr>
                  <td><v-btn variant="outlined" color="warning" density="compact" width="150">Warning</v-btn></td>
                  <td><v-btn variant="outlined" color="warning" density="default" width="150">Warning</v-btn></td>
                  <td><v-btn variant="outlined" color="warning" density="comfortable" width="150">Warning</v-btn></td>
                </tr>

                <tr>
                  <td><v-btn variant="outlined" color="info" density="compact" width="150">Info</v-btn></td>
                  <td><v-btn variant="outlined" color="info" density="default" width="150">Info</v-btn></td>
                  <td><v-btn variant="outlined" color="info" density="comfortable" width="150">Info</v-btn></td>
                </tr>

                <tr>
                  <td><v-btn variant="outlined" color="success" density="compact" width="150">Success</v-btn></td>
                  <td><v-btn variant="outlined" color="success" density="default" width="150">Success</v-btn></td>
                  <td><v-btn variant="outlined" color="success" density="comfortable" width="150">Success</v-btn></td>
                </tr>


              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Breadcrumb from "@/components/Breadcrumb.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonsPage",
  components: { Breadcrumb }
});
</script>
