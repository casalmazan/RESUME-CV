<template>
    <body>
      <div class="profile">
        <h1>{{ message }}</h1>
        <p>
          {{ msg }}
        </p>
  
        <p>
          {{ msg2 }}
        </p>
        <p>
          {{ msg3 }}
        </p>
        <p>
          {{ msg4 }}
        </p>
        <p>
          {{ msg5 }}
        </p>
        <hr class="style1" />
      </div>
    </body>
  </template>
  
  <script>
  export default {
    name: 'Profile',
    data() {
      return {
        message: 'Personal Information',
        msg: 'Name: Christine Alexandra S. Almazan',
        msg2: 'Age: 22',
        msg3: 'Email: cas.almazan@gmail.com',
        msg4: ' Contact Number: 09991891261',
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
