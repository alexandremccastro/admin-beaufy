<template>
  <v-layout class="justify-center align-center">
    <v-card width="300" class="text-center pa-3">
      <v-card-title><span class="text-grey">Admin</span>Beaufy</v-card-title>
      <v-card-subtitle>Type your credentials to enter</v-card-subtitle>
      <v-card-text class="pb-0">
        <text-field label="Email" type="text" v-model="auth.email" />

        <text-field
          label="Password"
          :type="inputType"
          :append-inner-icon="inputIcon"
          v-model="auth.password"
          @click:appendInner="changeInputType"
        />

        <v-btn block color="primary" @click="attemptLogin">Login</v-btn>
      </v-card-text>
      <v-card-actions class="p-0 m-0">
        <p class="w-100 text-center">
          Need an account?
          <router-link :to="{ name: 'Register' }">Create here.</router-link>
        </p>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TextField from "@/components/TextField.vue";

export default defineComponent({
  name: "LoginPage",
  components: { TextField },
  data() {
    return {
      inputType: "password",
      inputIcon: "mdi-eye",
      auth: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    changeInputType() {
      if (this.inputType == "password") {
        this.inputType = "text";
        this.inputIcon = "mdi-eye-off";
      } else {
        this.inputType = "password";
        this.inputIcon = "mdi-eye";
      }
    },

    attemptLogin() {},
  },
});
</script>
