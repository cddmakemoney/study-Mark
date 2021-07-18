<template>
  <ul>
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>

  </ul>
</template>

<script>
export default {
  props: ["id", "title"],
};
</script>

<style>
</style>