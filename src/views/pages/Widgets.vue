<template>
  <v-container fluid>
    <Breadcrumb />

    <v-row>
      <v-col cols="12" sm="6" md="3">
        <InfoBox icon="mdi-email-outline" label="Messages" value="1400" color="bg-green" />
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <InfoBox icon="mdi-flag-outline" label="Bookmarks" value="1400" color="bg-blue" />
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <InfoBox icon="mdi-content-copy" label="Uploads" value="800" color="bg-red" />
      </v-col>


      <v-col cols="12" sm="6" md="3">
        <InfoBox icon="mdi-star-outline" label="Likes" value="9345" color="bg-yellow" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Breadcrumb from "@/components/Breadcrumb.vue";
import { defineComponent } from "vue";
import InfoBox from "@/components/widgets/InfoBox.vue";

export default defineComponent({
  name: "WidgetsPage",
  components: { InfoBox, Breadcrumb }
});
</script>
