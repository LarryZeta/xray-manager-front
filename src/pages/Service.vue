<template>
  <div>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Service</h1>
    </div>

    <div class="container">
      <b-card-group deck class="mb-3 text-center">
        <b-card class="mb-4 shadow-sm">
          <template #header>
            <h4 class="my-0 font-weight-normal">Month</h4>
          </template>
          <b-card-body tag="form" action="/pay" method="post">
            <h1 class="card-title pricing-card-title">
              ￥10 <small class="text-muted">/ mo</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>US line</li>
              <li>A month of service</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <input type="hidden" value="30" name="days" />
            <b-button type="submit" variant="primary" size="lg" block>
              Get Started
            </b-button>
          </b-card-body>
        </b-card>
        <b-card class="mb-4 shadow-sm">
          <template #header>
            <h4 class="my-0 font-weight-normal">Half Year</h4>
          </template>
          <b-card-body tag="form" action="/pay" method="post">
            <h1 class="card-title pricing-card-title">
              ￥50 <small class="text-muted">/ hy</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>US line</li>
              <li>A half year of service</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <input type="hidden" value="183" name="days" />
            <b-button type="submit" variant="primary" size="lg" block>
              Get started
            </b-button>
          </b-card-body>
        </b-card>
        <b-card class="mb-4 shadow-sm">
          <template #header>
            <h4 class="my-0 font-weight-normal">Year</h4>
          </template>
          <b-card-body tag="form" action="/pay" method="post">
            <h1 class="card-title pricing-card-title">
              ￥90 <small class="text-muted">/ yr</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>US line</li>
              <li>A year of service</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <input type="hidden" value="366" name="days" />
            <b-button type="submit" variant="primary" size="lg" block>
              Get started
            </b-button>
          </b-card-body>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<style scoped>
.pricing-header {
  max-width: 700px;
}

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
// import Footbar from '../components/Footbar.vue'

export default {

  
  data() {
    return {};
  },
  components: {
    // Footbar
  }
};
</script>
