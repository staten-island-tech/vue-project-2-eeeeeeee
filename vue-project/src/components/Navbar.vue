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
  color: #2c3e50;
  font-size: 4rem;
  font-weight: bold;
  float: left;
  max-width: 30%;
  text-decoration: wavy underline overline blink #df534e 0.7rem;
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

.title:hover {
  color: rgb(245, 237, 121);
}

.options a {
  font-weight: bold;
  color: #25313d;
}

.options a.router-link-exact-active {
  color: #42b983;
}
</style>
