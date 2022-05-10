<template>
  <div>
    <div class="nav">
      <div class="nav-link">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/login">Login</router-link>
      </div>
      <div class="nav-link">
        <router-link to="/signup">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  margin: 1rem;
  padding: 2.5rem;
  padding-right: 5%;
  padding-left: 5%;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.nav-link {
  font-size: 2rem;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
