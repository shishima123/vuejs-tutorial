<template>
  <ul
    class="todo-list"
    v-if="listTodos.length > 0"
  >
    <li
      v-for="(item, index) in listTodosFilter"
      class="todo-list-item mt-3"
      :key="index"
      :class="{ 'item-deleted' : item.isCompleted, editting: item == editTodo}"
    >
      <div class="view">
        <img
          src="../assets/img/uncheck.svg"
          alt="uncheck"
          class="icon-size mr-3 icon-state-item"
          @click="handleDoneItem(index)"
        >
        <div class="d-flex justify-content-between align-items-center">
          <p
            ref="item"
            class="m-0 text-break w-100"
          >{{ item.name }}</p>
          <div class="item-action">
            <img
              src="../assets/img/edit.svg"
              alt="edit"
              class="icon-size btn-delete-item mr-3"
              @click="handleEditItem(item)"
            >
            <img
              src="../assets/img/untick.png"
              alt="delete"
              class="icon-size btn-delete-item mr-3"
              @click="handleRemoveItem(index)"
            >
          </div>
        </div>
      </div>
      <input
        type="text"
        class="edit w-100"
        v-model="item.name"
        @blur="handleDoneEdit(item)"
        @keyup.enter="handleDoneEdit(item)"
        @keyup.esc="handleCancelEdit(item)"
        v-focus="item == editTodo"
      >
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
    },
    editTodo: {
      type: Object,
      default: null
    }
  },
  methods: {
    handleEditItem (item) {
      this.beforeEditCache = item.name
      this.$emit('edit:item', item)
    },
    handleRemoveItem (index) {
      this.$emit('remove:item', {
        index: index
      })
    },
    handleDoneItem (index) {
      this.$emit('done:item', {
        index: index
      })
    },
    handleDoneEdit (item) {
      this.beforeEditCache = null
      this.$emit('edit:item', null)
    },
    handleCancelEdit (item) {
      item.name = this.beforeEditCache
      this.$emit('edit:item', null)
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
  },
  directives: {
    'focus': function (el, binding) {
      if (binding.value) {
        el.focus()
      }
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

.item-action {
  display: none;
}

.todo-list-item:hover > .view > div > .item-action {
  display: block;
  animation: fadeIn 0.5s ease;
  cursor: pointer;
}

.todo-list-item > .view {
  display: flex;
}

.todo-list-item > .view > div {
  width: calc(100% - 32px - 1rem);
}

.item-action {
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
.todo-list-item.editting > .view {
  display: none;
}

.todo-list-item > .edit {
  display: none;
}

.todo-list-item.editting > .edit {
  display: block;
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
