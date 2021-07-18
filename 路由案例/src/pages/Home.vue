<template>
  <div>
    <h1>Home内容</h1>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item "
          to="/home/news"
        >News</router-link>
      </li>
      <li>
        <router-link
          class="list-group-item "
          to="/home/message"
        >Message</router-link>
      </li>
    </ul>
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>

  </div>

</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>