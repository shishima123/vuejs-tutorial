<template>
  <div class="list-user">
    <ul>
      <User
        v-for="listUser in listUsers"
        v-bind:key="listUser.id"
        v-bind:user="listUser"
        v-on:delete:user="handleDeleteUser"
      />
    </ul>
    <input
      ref="inputTextRef"
      type="text"
      name="text"
      id="text"
    >
    <input
      ref="inputChoosenFileRef"
      style="display:none;"
      type="file"
      name="file"
      id="file"
    >
    <button
      v-on:click="handleChoosenFile"
      class="btn-choosen"
    >Choosen file</button>
    <button
      v-on:click="handleFocusInput"
      class="btn-choosen"
    >Focus Input</button>
  </div>
</template>

<script>
import User from './User'
export default {
  name: 'list-user',
  props: {
    listUsers: {
      type: Array,
      default: null
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleDeleteUser (data) {
      this.$emit('delete:user', data)
    },
    handleChoosenFile () {
      this.$refs.inputChoosenFileRef.click()
    },
    handleFocusInput () {
      this.$refs.inputTextRef.focus()
    }
  },
  components: {
    User
  }
}
</script>

<style>
.list-user {
  display: inline-block;
  margin-bottom: 100px;
  height: calc(100vh - 200px);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.list-user ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}
.btn-choosen {
  margin-top: 30px;
  padding: 10px 20px;
  color: black;
  background-color: rgb(108, 177, 255);
  border: 1px solid rgb(108, 177, 255);
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn-choosen:hover {
  background-color: royalblue;
}
</style>
