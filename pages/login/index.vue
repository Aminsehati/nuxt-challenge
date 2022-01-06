<template>
  <div class="login-page">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            color="primary"
            label="Username"
            required
            v-model="field.username"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            color="primary"
            label="password"
            required
            v-model="field.password"
            type="password"
          >
          </v-text-field>
        </v-col>
        <div class="text-center w-100">
          <v-btn depressed color="primary" @click="loginUser"> Login </v-btn>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import "./style.css";
export default {
  layout: "login",
  middleware({ redirect }) {
    const token = localStorage["token"];
    if(token){
      return redirect("/")
    }
  },
  data() {
    return {
      field: {
        username: "front-test",
        password: "front-pass",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        const params = {
          username: "front-test",
          password: "front-pass",
        };
        const httpReponse = await this.$auth.login(params);
        if (httpReponse.success) {
          const { data } = httpReponse;
          localStorage.setItem("token", data);
          this.$router.push("/");
        }
      } catch (error) {}
    },
  },
};
</script>