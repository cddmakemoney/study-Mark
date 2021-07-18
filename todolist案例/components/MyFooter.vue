<template>
  <div
    class="todo-footer"
    v-show="todos.length"
  >
    <label>
      <input
        type="checkbox"
        v-model="checkAll"
      />
    </label>
    <span>
      <span>已完成{{donetotal}}</span> / 全部{{todos.length}}
    </span>
    <button
      class="btn btn-danger"
      @click="clearAll()"
    >清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "changeAll", "clearAll"],
  computed: {
    donetotal() {
      return this.todos.reduce((sum, todo) => sum + (todo.done ? 1 : 0), 0);
    },
    checkAll: {
      get() {
        return this.donetotal == this.todos.length && this.todos.length > 0;
      },
      set(done) {
        this.changeAll(done);
      },
    },
  },
};
</script scoped>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>