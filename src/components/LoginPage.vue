<script>
import axios from "axios";
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      username: null,
      password: null,
      token: null,
    };
  },

  methods: {
    async login(username, password) {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };
      const bodyParameters = {
        username: username,
        password: password,
      };
      await axios
        .post("http://94.74.86.174:8080/api/login", {
          bodyParameters,
          config,
        })
        .then(console.log())
        .catch(console.log());
    },
  },
};
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Username :
      <input placeholder="username" v-model="username" />
    </h3>
    <h3>
      Password :
      <input placeholder="password" type="password" v-model="password" />
    </h3>
    <button v-on:click="login(username, password)" class="green-button">Login</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.greetings button {
  display: block;
  align-items: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
</style>
