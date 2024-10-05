<template>
    <div class="Skills">
      <h1 >{{ message }}</h1>
      <p>{{ msg2 }}</p>
      <p>{{ msg3 }}</p>
      <p>{{ msg4 }}</p>
      <p>{{ msg5 }}</p>
      <p>{{ msg6 }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Skills',
    data() {
      return {
        message: 'Skills',
        msg2: 'Designing layouts and proficiency in using different web-based design tools such as Canva and Figma.',
        msg3: 'Familiarity with databases (SQL, NoSQL).',
        msg4: 'Knowledge of readability, hierarchy, and font selection for different media.',
        msg5: 'Proficiency with front-end programming languages such as HTML and CSS.',
        msg6: 'Creating logos, icons, and other branding materials.',
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    margin: 40px 0 0;
    color: white;
  }
 
  p {
    color: white;
    font-size: 25px;
    font-style: italic;
  }
  
  </style>