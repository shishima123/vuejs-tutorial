<template>
  <div id="app">
    <header>
      Todo Lists
    </header>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-6 border rounded p-3 box-shadow">
          <Input
            @add:item="handleAddItem"
            :isAllTodoCompleted="isAllTodoCompleted"
            @tick-all:item="handleTickAll"
          />
          <TodoItem
            :listTodos="listTodos"
            @remove:item="handleRemoveItem"
            @done:item="handleDoneItem"
            :filters="filters"
          />
          <Footer
            :listTodos="listTodos"
            :filters="filters"
            @change:filter="handleChangeFilter"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from './components/Input'
import TodoItem from './components/TodoItem'
import Footer from './components/Footer'
export default {
  name: 'App',
  data () {
    return {
      listTodos: [],
      filters: [
        { 'type': 'All', isActive: true },
        { 'type': 'Active', isActive: false },
        { 'type': 'Completed', isActive: false }
      ]
    }
  },
  methods: {
    handleAddItem (data) {
      this.listTodos.push(data)
    },
    handleRemoveItem (data) {
      this.listTodos.splice(data.index, 1)
    },
    handleDoneItem (data) {
      var index = data.index
      var currtentItem = this.listTodos[index]
      this.listTodos[index].isCompleted = !currtentItem.isCompleted
    },
    handleTickAll () {
      var state = this.listTodos.filter(item => item.isCompleted === false).length > 0

      this.listTodos.map(item => { item.isCompleted = state })
    },
    handleChangeFilter (data) {
      this.filters.map(
        item => {
          if (item.type === data.type) {
            item.isActive = true
          } else {
            item.isActive = false
          }
          return item
        }
      )
    }
  },
  computed: {
    isAllTodoCompleted () {
      return this.listTodos.filter(item => item.isCompleted === false).length > 0
    }
  },
  components: {
    Input,
    TodoItem,
    Footer
  }
}
</script>

<style>
body {
  background-color: #f5f5f5;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
header {
  color: #2196f3;
  font-size: 70px;
  text-align: center;
  width: 100%;
  height: 150px;
  line-height: 150px;
  font-style: italic;
  font-weight: 700;
}
.box-shadow {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: #fff;
  transition: all 0.3s ease;
}
</style>
