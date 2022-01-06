<template>
  <div class="profile-page">
    <h2>profile</h2>
    <v-row>
      <v-col cols="4">
        <v-text-field label="firstName" v-model="userInfo.fistName" readonly>
        </v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field label="lastName" v-model="userInfo.lastName" readonly>
        </v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field label="role" v-model="userInfo.role" readonly>  </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {
        fistName: "test",
        lastName: "user",
        role: "developer",
      },
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      try {
        const httpResponse = await this.$auth.getUserInfo();
        console.log(httpResponse);
      } catch (error) {}
    },
  },
};
</script>