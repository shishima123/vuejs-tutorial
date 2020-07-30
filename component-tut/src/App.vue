<template>
  <div id="app">
    <Header
      v-bind:title="title"
      v-on:change:title="handleChangeTitleEvent"
    />
    <ListUser
      v-bind:listUsers="listUsers"
      v-on:delete:user="handleDeleteUser"
    ></ListUser>
    <Footer v-bind:title="title" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import ListUser from './components/ListUser'
export default {
  name: 'App',
  data () {
    return {
      title: 'This is a title',
      listUsers: [
        {
          id: 1,
          email: 'test1@gmail.com',
          active: true
        },
        {
          id: 2,
          email: 'test2@gmail.com',
          active: true
        },
        {
          id: 3,
          email: 'test3@gmail.com',
          active: true
        }, {
          id: 4,
          email: 'test4@gmail.com',
          active: true
        }
      ]
    }
  },
  methods: {
    handleChangeTitleEvent (data) {
      this.title = data.title
    },
    handleDeleteUser (data) {
      this.listUsers = this.listUsers.filter(item => item.id !== data.id)
    }
  },
  components: {
    Header,
    Footer,
    ListUser
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
