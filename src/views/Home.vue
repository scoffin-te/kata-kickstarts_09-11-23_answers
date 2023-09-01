<template>
  <div class="home">
    <h1>{{ header }}</h1>
    
    <br>

    <label>What is your name?</label><br>
    <input class="input" type="text" v-model="user">
    <p>Oh... So your name is {{ user }}!</p>
  
    <div>
      <p>Hobbies:</p>
      <ul id="hobbies">
        <li v-for="hobby in hobbies" v-bind:key="hobby.id">{{ hobby }}</li>
      </ul>
    </div>

    <br>

    <div>Words to live by: <em>{{ $store.state.wordsToLiveBy }}</em></div>

    <br>

    <div>Dad Joke of the Day: <em>{{ randomDadJoke }}</em></div>
    <button v-on:click="generateRandomDadJoke">Generate hilarious joke</button>

  </div>
</template>

<script>

import dadJokeService from '../services/DadJokeService';

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
      ],
      randomDadJoke: ""
    }
  },
  created() {
    // dadJokeService.getRandomDadJoke().then((response) => {
    //   this.randomDadJoke = response.data;
    // });
    this.generateRandomDadJoke();
  },
  methods: {
    generateRandomDadJoke() {
      dadJokeService.getRandomDadJoke().then((response) => {
        this.randomDadJoke = response.data;
      });
    }
  }
};
</script>

<style scoped>
  .input {
    border: 1px solid black;
  }
</style>