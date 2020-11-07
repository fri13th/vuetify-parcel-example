<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link v-for="(item, i) in items" :key="i" :to="{ name: item.path }">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
      <form method="POST" action="/logout" id="logout" class="d-none">
        <input type="hidden" name="_token" value="" />
      </form>
    </v-app-bar>

    <v-main>
      <v-container fluid><router-view></router-view></v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text body-2">Copyright 2020. All Rights Reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'app',
  data: () => ({
    drawer: false,
    items: [
      {
        icon: 'mdi-view-dashboard',
        title: 'Home',
        path: ''
      }
    ]
  }),
  methods: {
    ...mapActions(['checkLogin']),
    logout() {
      // logout here
    }
  },
  computed: mapState(['login']),
  created() {
    this.checkLogin();
  }
};
</script>
