<template>
  <div id="app">
    <div id="nav">
      <router-link v-bind:to="{ name: 'home' }">Home</router-link>
      &nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'about-us' }">About Us</router-link>
    </div>
    <router-view />
  </div>
</template>
