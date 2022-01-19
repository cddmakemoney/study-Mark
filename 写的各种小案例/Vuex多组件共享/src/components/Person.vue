<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件求和为：{{sum}}</h3>
    <input
      type="text"
      placeholder="请输入名字"
      v-model="name"
    >
    <button @click="add(name)">添加</button>
    <ul>
      <li
        v-for="p in personList"
        :key="p.id"
      >{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["personList", "sum"]),
  },
  methods: {
    /* add在上面放了形参，这个参数能传到jiaren函数里面的第二个参数 */
    ...mapActions({ add: "jiaren" }),
  },
};
</script>

<style>
</style>