<template>
  <b-navbar toggleable="lg" type="light" class="shadow-sm">
    <div class="container">
      <b-navbar-brand href="#">Xray Manager</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Service</b-nav-item>
          <b-nav-item href="#">Clients</b-nav-item>
          <b-nav-item href="#">Orders</b-nav-item>
          <b-nav-item href="#">Users</b-nav-item>
          <b-nav-item href="#">Accounts</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <span>{{ session.loginUser }}</span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

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
