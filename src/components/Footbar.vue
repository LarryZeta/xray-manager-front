<template>
  <div class="container">
    <footer class="pt-4 my-md-5 pt-md-5 border-top" id="footer">
      <div class="row">
        <div class="col-12 col-md">
          <small class="d-block mb-3 text-muted" v-once>
            © Larry Zeta 2019 - {{ year }}
          </small>
        </div>
        <div class="col-22 col-md">
          <small class="text-muted">
            Powered by
            <a href="https://vuejs.org/" target="about:blank">
              <img alt="Vue logo" src="../assets/logo.png" width="20" height="20"/>
            </a>
            &amp;
            <a href="https://bootstrap-vue.org/" target="about:blank">
              <img alt="BootstrapVue logo" src="../assets/bootstrap-vue.png" width="20" height="20"/>
            </a>
          </small>
        </div>
      </div>
    </footer>
  </div>
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
