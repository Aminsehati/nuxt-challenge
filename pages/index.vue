<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        
      </v-card>
      <v-card>
        <v-card-title class="headline text-center">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  middleware({ redirect }) {
    const token = localStorage["token"];
    if(!token){
      return redirect("/login")
    }
  },
  mounted(){
    this.getUserList()
  },
  methods:{
    async getUserList(){
      try {
        const httpResponse = await this.$auth.getUserInfo();
        console.log(httpResponse);
      } catch (error) {
        
      }
    }
  }
};
</script>