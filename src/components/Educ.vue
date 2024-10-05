<template>
  <div class="education">
    <h1>{{ message }}</h1>
    <p>{{ msg }}</p>
    <p>{{ msg2 }}</p>
    <p>{{ msg3 }}</p>
    <p>{{ msg4 }}</p>

    <hr class="style1" />
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      message: 'Education',
      msg: 'Elementary: San Lorenzo Ruiz Center of Studies and Schools',
      msg2: 'JHS: Holy Family Academy',
      msg3: 'SHS: Holy Family Academy',
      msg4: 'College: Holy Angel University',
    }
  }
}
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