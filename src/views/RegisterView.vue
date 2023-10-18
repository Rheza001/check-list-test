<template>
  <div class="greetings">
    <h1 class="green">Register Here</h1>
    <h3>
      Email :
      <input placeholder="email" v-model="email" />
    </h3>
    <h3>
      Username :
      <input placeholder="username" v-model="username" />
    </h3>
    <h3>
      Password :
      <input placeholder="password" type="password" v-model="password" />
    </h3>
    <button v-on:click="login(username, password)" class="green-button">
      Register
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      email: null,
      username: null,
      password: null,
      token: null,
    };
  },

  methods: {
    async login(email, username, password) {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };
      const bodyParameters = {
        email: email,
        username: username,
        password: password,
      };
      await axios
        .post("http://94.74.86.174:8080/api/register", {
          bodyParameters,
          config,
        })
        .then(console.log())
        .catch(console.log());
    },
  },
};
</script>