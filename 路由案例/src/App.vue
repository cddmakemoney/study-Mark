<template>
  <div>
    <div class="row">
      <Banner />
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--  <a
            class="list-group-item"
            href="./about.html"
          >About</a>
          <a
            class="list-group-item active"
            href="./home.html"
          >Home</a> -->
          <router-link
            class="list-group-item "
            active-class="active"
            to="/about"
            replace
          >About</router-link>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home"
            replace
          >Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";

export default {
  name: "App",
  components: { Banner },
};
</script>;
