<template>
  <div>
    <nav class="navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">CuppaCoffee</router-link>
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/login" v-if="!user"
            >Login</router-link
          >
          <router-link class="nav-item nav-link" to="/register" v-if="!user"
            >Register</router-link
          >
          <router-link class="nav-item nav-link" to="/groups" v-if="user"
            >Groups</router-link
          >
          <button
            class="nav-item nav-link btn btn-link"
            v-on:click="$emit('logout')"
            v-if="user"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation",
  props: ["user"]
};
</script>
