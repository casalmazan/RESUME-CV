<template>
  <div id="border">
    <div id="app">
      <Profile msg = "Personal Information"/>
      <Education msg = "Education"/>
      <Skills msg = "Skills"/>
    </div>
  </div>
</template>

<script>
import Profile from './components/Profile.vue';
import Education from './components/Educ.vue';
import Skills from './components/Skills.vue';

export default {
  name: 'App',
  components: {
    Profile,
    Education,
    Skills,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
}

#border {
  border: 3px solid white;
  padding: 100px;
  border-style: dashed;
}
</style>