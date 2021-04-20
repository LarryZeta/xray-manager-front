<template>
  <footer class="pt-4 my-md-5 pt-md-5 border-top" id="footer">
    <div class="row">
      <div class="col-12 col-md">
        <small class="d-block mb-3 text-muted" v-once>
            © Larry Zeta 2019 - {{ year }}
        </small>
      </div>
      <div>
        <small class="text-muted">
          Powered by <img alt="Vue logo" src="../assets/logo.png" width="20" height="20"> &amp; <img alt="BootstrapVue logo" src="../assets/bootstrap-vue.png" width="20" height="20">
        </small>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
