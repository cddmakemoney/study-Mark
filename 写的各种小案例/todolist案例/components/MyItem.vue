<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked='todo.done'
        @change="handle(todo.id)"
      />
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <!-- 编辑文本 -->
      <!-- @blur="handleBlur(todo,$event)"，这里写$event可以拿到当前事件 -->
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        ref="inputTitle"
        @blur="handleblur(todo,$event)"
      />

    </label>
    <button
      class="btn btn-danger"
      @click="deletetodo(todo.id)"
    >删除</button>
    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="Edit(todo)"
    >编辑</button>
  </li>
</template>
<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handle(id) {
      this.$bus.$emit("changetodo", id);
    },
    deletetodo(id) {
      this.$bus.$emit("handleDelete", id);
    },
    Edit(todo) {
      /* 检查是否有这个参数 */
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        /* 主动添加参数 */
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handleblur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value) return alert("不能为空");
      this.$bus.$emit("updatetodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>