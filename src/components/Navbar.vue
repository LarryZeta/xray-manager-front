<template>
  <b-navbar toggleable="lg" type="light" class="shadow-sm">
    <div class="container">
      <b-navbar-brand href="#">Xray Manager</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="'/service'">Service</b-nav-item>
          <b-nav-item :to="'/clients'">Clients</b-nav-item>
          <b-nav-item :to="'/orders'">Orders</b-nav-item>
          <b-nav-item :to="'/users'">Users</b-nav-item>
          <b-nav-item :to="'/accounts'">Accounts</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <span>{{ session.loginUser }}</span>
            </template>
            <b-dropdown-item href="#/profile">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<style scoped>
html {
  font-size: 14px;
}
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.container {
  max-width: 960px;
}

.pricing-header {
  max-width: 700px;
}

.card-deck .card {
  min-width: 220px;
}

</style>

<script>
export default {
  data() {
    return {
      session: {
        loginUser: "admin",
        isAdmin: true,
      },
    };
  },
};
</script>
