<template>
  <div class="mt-3">
    <div class="text-secondary text-center">
      <div v-if="user" class="text-center">
        Welcome Back
        <span class="font-weight-bold text-danger">{{ user.displayName }}</span>
      </div>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h4 class="display-4 text-primary mb-2">Groups Log</h4>
          <p class="lead">
            This simple app creates Groups, allows people to check in, and picks
            random users to award giveaways. It's a good example of a Single
            Page Application which includes connection to a database and
            routing. It's a practical way to learn
            <a href="https://vuejs.org/">Vue.js</a>
            with
            <a href="https://firebase.google.com">Firebase</a>.
            <font-awesome-icon icon="star"></font-awesome-icon>
          </p>

          <router-link
            class="btn btn-outline-primary mr-2"
            to="/register"
            v-if="!user"
            >Register</router-link
          >
          <router-link
            class="btn btn-outline-primary mr-2"
            to="/login"
            v-if="!user"
            >Log In</router-link
          >
          <router-link class="btn btn-primary" to="/groups" v-if="user"
            >Groups</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "home",
  props: ["user"],
  components: {
    FontAwesomeIcon
  }
};
</script>
