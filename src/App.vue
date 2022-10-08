<template>
  <nav>
    
    <router-link :to="{name: 'users'}">Home</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: #06283D;
  padding: 3em;
}


nav a {
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: none;
  background-color: crimson;
  padding: 10px;
  border-radius: 10px;
  
}

nav a.router-link-exact-active {
  color: white;
  margin-bottom: 20px;
}
</style>
