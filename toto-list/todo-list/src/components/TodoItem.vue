<template>
  <ul
    class="todo-list"
    v-if="listTodos.length > 0"
  >
    <li
      v-for="(item, index) in listTodosFilter"
      class="todo-list-item d-flex mt-3"
      :key="index"
      :class="{ 'item-deleted' : item.isCompleted }"
    >
      <img
        src="../assets/img/uncheck.svg"
        alt="#"
        class="icon-size mr-3 icon-state-item"
        @click="handleDoneItem(index)"
      >
      <div class="d-flex justify-content-between align-items-center">
        <p class="m-0 text-break w-100">{{ item.name }}</p>
        <img
          src="../assets/img/untick.png"
          alt="/Todo-List/static/media/uncheck.40eb9cc6.svg"
          class="icon-size btn-delete-item mr-3"
          @click="handleRemoveItem(index)"
        >
      </div>
    </li>
  </ul>
  <h3
    class="text-center my-3 text-success font-weight-bold"
    v-else
  >
    Nothing here
  </h3>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    listTodos: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleRemoveItem (index) {
      this.$emit('remove:item', {
        index: index
      })
    },
    handleDoneItem (index) {
      this.$emit('done:item', {
        index: index
      })
    }
  },
  computed: {
    listTodosFilter () {
      let filterActive = this.filters.filter(item => item.isActive)[0]
      let listTodosFilter
      if (filterActive.type === 'Active') {
        listTodosFilter = this.listTodos.filter((item) => item.isCompleted === false)
      } else if (filterActive.type === 'Completed') {
        listTodosFilter = this.listTodos.filter((item) => item.isCompleted === true)
      } else {
        listTodosFilter = this.listTodos
      }
      return listTodosFilter
    }
  }
}
</script>

<style>
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.btn-delete-item {
  display: none;
}

.todo-list-item:hover > div > .btn-delete-item {
  display: block;
  animation: fadeIn 0.5s ease;
  cursor: pointer;
}

.todo-list-item > div {
  width: calc(100% - 32px - 1rem);
}

.btn-delete-item {
  position: absolute;
  right: 0;
}
.icon-state-item {
  transition: 0.3s;
  border-radius: 20px;
}

.icon-state-item:hover {
  background-color: #4baf88 !important;
}

.item-deleted > img {
  background-color: #4baf88 !important;
  opacity: 0.5;
}

.item-deleted > div > p {
  text-decoration: line-through;
  opacity: 0.5;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
