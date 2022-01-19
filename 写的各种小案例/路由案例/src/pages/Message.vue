<template>
  <div>
    <ul>
      <li
        v-for="m in messageList"
        :key=m.id
      >
        <router-link :to="{
        name:'xijie',
        query:{
          id:m.id,
          title:m.title
        }
      }">{{m.title}}
        </router-link>
      </li>
    </ul>
    <br>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data() {
    return {
      messageList: [
        {
          id: "001",
          title: "消息1号",
        },
        {
          id: "002",
          title: "消息2号",
        },
        {
          id: "003",
          title: "消息3号",
        },
      ],
    };
  },
};
</script>

<style>
</style>