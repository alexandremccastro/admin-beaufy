<template>
  <v-container fluid>
    <Breadcrumb />

    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Simple Form</v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <v-form ref="simpleForm">
              <text-field label="Name" v-model="simpleForm.name" :value="simpleForm.name" :rules="simpleFormRules.name" />

              <text-field label="Email" v-model="simpleForm.email" :value="simpleForm.email"
                :rules="simpleFormRules.email" />

              <file-input label="Photo" v-model="simpleForm.file" :value="simpleForm.file"
                :rules="simpleFormRules.file" />
            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn width="100" color="primary" variant="elevated" @click="submitSimpleForm">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>Differente Sizes</v-card-title>
              <v-divider></v-divider>

              <v-card-text>
                <v-form ref="diffSizeForm">
                  <text-field label="Compact" v-model="diffSizeForm.compact" density="compact" />

                  <text-field label="Comfortable" density="comfortable" v-model="diffSizeForm.comfortable" />
                  <text-field label="Default" density="default" v-model="diffSizeForm.default" />
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-title>Differente Width</v-card-title>
              <v-divider></v-divider>

              <v-card-text>
                <v-form ref="diffWidthForm">
                  <v-row>
                    <v-col cols="3">
                      <text-field label="col-3" v-model="diffWidthForm.col3" density="compact"
                        :value="diffWidthForm.col3" />
                    </v-col>

                    <v-col cols="4">
                      <text-field label="col-4" v-model="diffWidthForm.col4" density="compact"
                        :value="diffWidthForm.col4" />
                    </v-col>

                    <v-col cols="5">
                      <text-field label="col-5" v-model="diffWidthForm.col5" density="compact"
                        :value="diffWidthForm.col5" />
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-title>General Elements</v-card-title>
              <v-divider></v-divider>

              <v-card-text>
                <v-form ref="generalElementsForm">
                  <text-field label="Input" v-model="generalElementsForm.input" density="compact" />


                  <v-row>
                    <v-col cols="6">
                      <select-field label="Select" v-model="generalElementsForm.selectOne"
                        :items="generalElementsForm.items" item-title="name" item-value="id"></select-field>
                    </v-col>

                    <v-col cols="6">
                      <select-field label="Select multiple" v-model="generalElementsForm.selectMultiple"
                        :items="generalElementsForm.items" item-title="name" item-value="id" multiple></select-field>
                    </v-col>
                  </v-row>

                  <text-area label="Textarea" v-model="generalElementsForm.textarea" density="compact" />

                  <text-field label="Input with hint" v-model="generalElementsForm.inputWithHint" density="compact"
                    hint="Type a awesome text" />


                  <v-row>

                    <v-col cols="6">
                      <checkbox v-model="generalElementsForm.checkedOptions" hide-details label="First checkbox"
                        :rules="[v => !!v || 'This field is required.']" value="first" />
                      <checkbox hide-details v-model="generalElementsForm.checkedOptions" label="Second checkbox"
                        :rules="[v => !!v || 'This field is required.']" value="already-checked" />
                      <checkbox hide-details v-model="generalElementsForm.checkedOptions" disabled value="second"
                        label="Disabled checkbox" />
                    </v-col>
                    <v-col cols="6">
                      <v-radio-group v-model="generalElementsForm.radioOptions">
                        <radio value="first" label="First" />
                        <radio value="second" label="Second" />
                        <radio disabled value="disabled-radio" label="Disabled Second" />
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import TextField from "@/components/TextField.vue";
import FileInput from "@/components/FileInput.vue";
import TextArea from "@/components/TextArea.vue";
import Checkbox from "@/components/Checkbox.vue";
import Radio from "@/components/Radio.vue";
import SelectField from "@/components/SelectField.vue";

export default defineComponent({
  name: "GeneralElementsPage",
  components: { Breadcrumb, TextField, FileInput, TextArea, Checkbox, Radio, SelectField },
  data() {
    return {
      simpleForm: {
        name: '',
        email: '',
        file: ''
      },
      diffSizeForm: {
        compact: '',
        comfortable: '',
        default: ''
      },
      diffWidthForm: {
        col3: '',
        col4: '',
        col5: ''
      },
      generalElementsForm: {
        checkedOptions: [],
        radioOptions: null,
        inputWithHint: null,
        input: null,
        textarea: null,
        selectMultiple: null,
        selectOne: null,
        items: [
          {
            id: 1,
            name: 'One'
          },
          {
            id: 2,
            name: 'Two'
          },
          {
            id: 3,
            name: 'Three'
          },
          {
            id: 4,
            name: 'Four'
          },
          {
            id: 5,
            name: 'Five'
          },
        ]
      },

      simpleFormRules: {
        name: [
          (v: any) => !!v || 'This field is required.'
        ],
        email: [
          (v: any) => !!v || 'This field is required.'
        ],
        file: [
          (v: any) => Object.keys(v).length > 0 || 'This field is required.'
        ]
      }
    }
  },

  methods: {
    submitSimpleForm() {
      this.$refs.simpleForm?.validate()
    }
  }
});
</script>
