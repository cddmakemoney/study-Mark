<template>

  <div class="container">
    <Search />
    <List />
    <h1>cdd</h1>
  </div>
</template>

<script>
import Search from "./components/Search";
import List from "./components/List";
export default {
  name: "App",
  components: { Search, List },
};
</script>

