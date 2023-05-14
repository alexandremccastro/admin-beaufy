<template>
  <v-layout class="justify-center align-center">
    <v-card class="text-center pa-3" width="300">
      <v-card-title>Register</v-card-title>
      <v-card-subtitle>Fill out the form to register</v-card-subtitle>
      <v-card-text class="pb-0">
        <text-field label="Name" type="text" v-model="user.name"></text-field>

        <text-field label="Email" type="text" v-model="user.email"></text-field>

        <text-field
          label="Password"
          type="password"
          v-model="user.password"
        ></text-field>

        <text-field
          label="Password Confirmation"
          type="password"
          v-model="user.passwordConfirmation"
        ></text-field>

        <v-btn block color="primary">Register</v-btn>
      </v-card-text>
      <v-card-actions class="p-0 m-0">
        <p class="w-100 text-center">
          Already registered?
          <router-link :to="{ name: 'Login' }">Go to login.</router-link>
        </p>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TextField from "@/components/TextField.vue";

export default defineComponent({
  name: "RegisterPage",
  components: {
    TextField,
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  },
});
</script>
