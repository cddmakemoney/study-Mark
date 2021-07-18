<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">搜索GitHub用户</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
        @keyup.enter="search"
      />&nbsp;<button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    search() {
      this.$bus.$emit("updata", { isFirst: false, isLoading: true });
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        (res) => {
          this.$bus.$emit("updata", {
            isLoading: false,
            users: res.data.items,
          });
        },
        (err) => {
          this.$bus.$emit("updata", {
            errMsg: err.message,
            users: [],
            isLoading: false,
          });
        }
      );
    },
  },
  data() {
    return {
      keyword: "",
    };
  },
};
</script>

