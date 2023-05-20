<template>
  <v-container fluid>
    <Breadcrumb />


    <div class="mb-5">
      <h6 class="text-h6">InfoBox</h6>
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
    </div>


    <div class="mb-5">
      <h6 class="text-h6">Cards</h6>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-card>
            <v-card-title>Simple Card</v-card-title>
            <v-card-subtitle>Lorem ipsum dolor sit amet.</v-card-subtitle>
            <v-card-text>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab qui et magnam praesentium repudiandae quidem
                dolor nobis odio, cum voluptas.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn>Action 1</v-btn>
              <v-btn>Action 2</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-card :loading="true" color="green">
            <v-card-title>Loading</v-card-title>
            <v-card-text>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab qui et magnam praesentium repudiandae quidem
                dolor nobis odio, cum voluptas.</p>
            </v-card-text>
            <v-card-actions>
              <v-btn>Action 1</v-btn>
              <v-btn>Action 2</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-card color="blue">
            <v-card-title>Twitter</v-card-title>
            <v-card-text>
              <q>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab qui et magnam praesentium repudiandae quidem
                dolor nobis odio, cum voluptas.</q>
            </v-card-text>
            <v-card-actions>
              <div class="d-flex ">
                <v-avatar size="40" color="grey" class="mr-2">
                  JD
                </v-avatar>

                <div>
                  <p class="text-body-2">
                    <strong>Jhon Doe</strong>
                  </p>
                  <p class="text-body-2">
                    <small>jhondoe01</small>
                  </p>
                </div>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-card>
            <v-img class="align-end text-white" height="200" cover src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
              <v-card-title>Image Overlay</v-card-title>
              <div class="text-body-2 pa-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab qui
                et
                magnam praesentium
                repudiandae quidem
                dolor nobis odio, cum voluptas.</div>
            </v-img>

            <v-card-actions>

              <v-btn color="orange">
                Share
              </v-btn>
              <v-btn color="orange">
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="mb-5">
      <h6 class="text-h6">CustomBox</h6>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <CustomBox label="New Orders" color="info" value="150" icon="mdi-shopping-outline" />
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <CustomBox label="Bounce Rate" color="success" value="53%" icon="mdi-finance" />
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <CustomBox label="User Registrations" color="warning" value="250" icon="mdi-account-plus-outline" />
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <CustomBox label="Unique Visitors" color="red" value="27" icon="mdi-chart-line-variant" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script lang="ts">
import Breadcrumb from "@/components/Breadcrumb.vue";
import { defineComponent } from "vue";
import InfoBox from "@/components/widgets/InfoBox.vue";
import CustomBox from "@/components/widgets/CustomBox.vue";

export default defineComponent({
  name: "WidgetsPage",
  components: { InfoBox, Breadcrumb, CustomBox }
});
</script>
