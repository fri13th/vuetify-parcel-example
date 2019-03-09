<template>
    <v-app id="inspire">
        <v-navigation-drawer
                fixed
                v-model="drawer"
                app
        >
            <v-list dense>

                    <v-list-tile :to="'/'">
                        <v-list-tile-action>
                            <v-icon>home</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Home</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout
                        justify-center
                        align-center
                >
                    <v-progress-circular indeterminate :size="50" color="primary" v-show="login.waiting"></v-progress-circular>
                    <router-view v-show="!login.waiting"/>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>

</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'app',
  data: () => ({
    drawer: null
  }),
  methods: {
    ...mapActions(['checkLogin'])
  },
  computed: mapState(['login']),
  created() {
    this.checkLogin();
  }
};
</script>
