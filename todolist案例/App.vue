<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addtodo="addtodo" />
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          :changeAll="changeAll"
          :clearAll="clearAll"
        />
      </div>
    </div>
  </div>

</template>
<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  mounted() {
    this.$bus.$on("changetodo", this.changedone);
    this.$bus.$on("handleDelete", this.handleDelete);
    this.$bus.$on("updatetodo", this.updatetodo);
  },
  beforeDestroy() {
    this.$bus.$off("changetodo");
    this.$bus.$off("handleDelete");
  },
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: [
        { id: "1", title: "抽烟", done: true },
        { id: "2", title: "喝酒", done: true },
        { id: "3", title: "拳击", done: false },
      ],
    };
  },
  methods: {
    //添加事件
    addtodo(obj) {
      this.todos.unshift(obj);
    },
    //改变勾选
    changedone(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //编辑
    updatetodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title;
      });
    },
    //删除事件
    handleDelete(id) {
      this.todos = this.todos.filter((obj) => obj.id != id);
    },
    //点击全选
    changeAll(done) {
      this.todos.filter((obj) => (obj.done = done));
    },
    //清除已完成任务
    clearAll() {
      this.todos = this.todos.filter((obj) => obj.done == false);
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: white;
  background-color: skyblue;
  border: 1px solid skyblue;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>