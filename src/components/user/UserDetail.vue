<template>
  <div>
    <h3>Some User Details</h3>
    <p>Userloaded has ID: {{ id }}</p>
    <router-link tag="button" :to="link" class="btn btn-primary"
      >Edit User</router-link
    >
    <!-- :to="`/user/` + id + `/edit`" -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      link: {
        name: 'userEdit',
        params: { id: this.$route.params.id },
        query: { locale: 'en', q: 100 },
        hash: '#data',
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    if (true) {
      next((vm) => vm.link);
    } else {
      return next(false);
    }
  },
};
</script>
