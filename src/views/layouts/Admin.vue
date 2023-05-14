<template>
  <v-layout>
    <v-app-bar color="primary" density="comfortable" app>
      <v-app-bar-nav-icon @click="toggleNavigationDrawer"></v-app-bar-nav-icon>
      <v-app-bar-title>AdminBeaufy</v-app-bar-title>

      <v-spacer />

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-badge offset-y="10" offset-x="10" color="success" content="3">
            <v-btn icon="mdi-bell-outline" v-bind="props"></v-btn>
          </v-badge>
        </template>

        <v-list density="comfortable" width="200">
          <v-list-item @click="">
            <v-list-item-title>Account</v-list-item-title>
            <v-list-item-subtitle
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
              voluptates.</v-list-item-subtitle
            >
          </v-list-item>

          <v-divider />

          <v-list-item @click="">
            <v-list-item-title>Account</v-list-item-title>
            <v-list-item-subtitle
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
              voluptates.</v-list-item-subtitle
            >
          </v-list-item>
          <v-divider />
          <v-list-item @click="">
            <v-list-item-title>Account</v-list-item-title>
            <v-list-item-subtitle
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
              voluptates.</v-list-item-subtitle
            >
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-account-outline" v-bind="props"></v-btn>
        </template>

        <v-list density="comfortable" width="200">
          <v-list-item prepend-icon="mdi-account-outline" @click="">
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

          <v-list-item prepend-icon="mdi-cog-outline" @click="">
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item prepend-icon="mdi-exit-to-app" @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer theme="dark" v-model="drawer" app>
      <v-list density="comfortable">
        <template v-for="(item, idx) in items">
          <template v-if="item.children">
            <v-list-group :key="idx">
              <template v-slot:activator="{ props }">
                <v-list-item :prepend-icon="item.icon" v-bind="props">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </template>

              <v-list-item
                v-for="(child, idx) in item.children"
                :key="idx"
                :title="child.title"
                :to="child.to"
              >
              </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item
              :key="idx"
              :prepend-icon="item.icon"
              :title="item.title"
              :to="item.to"
            >
            </v-list-item>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main class="vh-100" app>
      <router-view />
    </v-main>
  </v-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminPreset",
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: "mdi-home-outline",
          title: "Home",
          to: { name: "Home" },
        },
        {
          icon: "mdi-widgets-outline",
          title: "Widgets",
          to: { name: "Widgets" },
        },
        {
          icon: "mdi-chart-box-outline",
          title: "Charts",
          to: { name: "Charts" },
        },
        {
          icon: "mdi-tree-outline",
          title: "UI Elements",
          children: [
            {
              title: "General",
              to: { name: "General" },
            },
            {
              title: "Buttons",
              to: { name: "Buttons" },
            },
            {
              title: "Icons",
              to: { name: "Icons" },
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggleNavigationDrawer() {
      this.drawer = !this.drawer;
    },
    logout() {
      this.$router.push({ name: "Login" });
    },
  },
});
</script>
