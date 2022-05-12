<template>
  <div>
    <div class="nav">
      <router-link to="/" class="title">Yu-Gi-Oh Deck Maker</router-link>
      <div class="options">
        <div class="nav-link">
          <router-link to="/">Home</router-link>
        </div>
        <div class="nav-link">
          <router-link to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  margin: 1rem 0 1rem 0;
  padding: 2.5rem;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  height: 10rem;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  float: left;
  max-width: 30%;
}

.options {
  margin-top: 3.5rem;
  display: flex;
  justify-content: space-between;
  width: 30%;
  float: right;
}

.nav-link {
  font-size: 2.5rem;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
