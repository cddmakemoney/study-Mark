<template>
  <div class="row">
    <div
      v-show="info.users.length"
      class="card"
      v-for="obj in info.users"
      :key="obj.login"
    >
      <a
        :href="obj.html_url"
        target="_blank"
      >
        <img
          :src="obj.avatar_url"
          style='width: 100px'
        />
      </a>
      <p class="card-text">{{obj.login}}</p>
    </div>
    <h1 v-show="info.isFirst">欢迎使用</h1>
    <h1 v-show="info.isLoading">加载中</h1>
    <h1 v-show="info.errMsg">{{info.errMsg}}</h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updata", (obj) => {
      /* 这是ES6写法，...的意思是把this.info所有的东西都摊在这里，obj也都摊在这里
      然后obj里的所有和this.info里重名的属性，将替换掉this.info原有的属性，this.info里没有和obj重名的属性，将被保留 */
      this.info = { ...this.info, ...obj };
      
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>