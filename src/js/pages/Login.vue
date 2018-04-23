<template>
    <v-container fluid>
        <v-layout row>
            <v-flex>
                <v-text-field
                        label="Username"
                        v-model="username"
                        :rules="nameRules"
                        required
                ></v-text-field>
                <v-text-field
                        label="Password"
                        hint="At least 8 characters"
                        v-model="password"
                        min="8"
                        :append-icon="passwordHidden ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (passwordHidden = !passwordHidden)"
                        :type="passwordHidden ? 'password' : 'text'"
                        required
                ></v-text-field>
                <v-btn
                        @click="submit"
                        :disabled="!notEmpty"
                >
                    submit
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import axios from 'axios';
import router from '../router';

export default {
  data: () => ({
    passwordHidden: true,
    username: '',
    password: ''
  }),
  methods: {
    ...mapActions(['loggedIn']),
    submit() {
      const data = {
        username: this.username,
        password: this.password
      };

      const loggedIn = this.loggedIn;

      //   axios.post('/json/login.php', data).then(function(response) {
      //     if (response.data.login) {
      //       loggedIn();
      //       router.push('/'); // this must be previous url
      //     }
      //   });
      loggedIn();
      router.push('/'); // this must be previous url
    }
  },
  computed: {
    ...mapState(['login']),
    notEmpty() {
      return this.username && this.password && this.password.length >= 0;
    }
  }
};
</script>