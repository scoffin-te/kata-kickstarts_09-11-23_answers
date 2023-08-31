<template>
  <div class="home">
    <h1>{{ header }}</h1>
    <label>What is your name?</label><br>
    <input class="input" type="text" v-model="user">
    <p>Oh... So your name is {{ user }}!</p>
    <div>
      <p>Hobbies:</p>
      <ul id="hobbies">
        <li v-for="hobby in hobbies" v-bind:key="hobby.id">{{ hobby }}</li>
      </ul>
    </div>
    <div><span>Words to live by: </span>{{ $store.state.wordsToLiveBy }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      header: "Welcome to my homepage!",
      user: "",
      hobbies: [
        "Cheese rolling",
        "Astral projection",
        "Electric fencing"
      ]
    }
  }
};
</script>

<style scoped>
  .input {
    border: 1px solid black;
  }
</style>