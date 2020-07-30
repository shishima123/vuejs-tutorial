<template>
  <li class="user">
    {{ this.user.email }}
    <button v-on:click="handleDeleteUser">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'user',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleDeleteUser (e) {
      this.$emit('delete:user', {
        id: this.user.id
      })
    }
  }
}
</script>

<style>
.user {
  margin: 10px;
  border: 1px solid #000;
  padding: 30px 30px;
  position: relative;
}
</style>
