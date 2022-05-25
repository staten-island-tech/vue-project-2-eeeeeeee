<template>
  <div>
    <div class="nav">
      <router-link to="/" class="logo"
        ><img id="img" src="../assets/Logo.png" alt="Valorant Logo"
      /></router-link>
      <template v-if="authUser">
        <div class="options">
          <div class="nav-link">
            <router-link to="/">Skins</router-link>
          </div>
          <div class="nav-link">
            <router-link to="/agents">Agents</router-link>
          </div>
          <div class="nav-link">
            <router-link to="/guns">Guns</router-link>
          </div>
          <div v-if="!user" class="nav-link">
            <router-link to="/login">Login</router-link>
          </div>

          <div v-if="user">
            <router-link class="user-buttons" to="/profile"
              >Profile</router-link
            >
            <button class="user-buttons" @click="handleClick">Logout</button>
          </div>
        </div></template
      >
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const handleClick = () => {
      store.dispatch("logout");
    };

    return {
      handleClick,
      user: computed(() => store.state.user),
      authUser: computed(() => store.state.authUser),
    };
  },
};
</script>

<style scoped>
.nav {
  background-color: #1c223c;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  height: 10rem;
}

.logo {
  margin: 0.5rem 0 0.5rem 2rem;
  float: left;
  width: 9rem;
  height: 9rem;
}

#img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.options {
  margin-top: 3.5rem;
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;
  width: 30%;
  float: right;
}

.user-buttons {
  display: flex;
  flex-direction: column;
  font-family: Changa, sans-serif;
  font-size: 1.75rem;
  border: transparent;
  background: transparent;
  font-weight: bold;
  color: #ffaaaa;
}

.nav-link {
  font-size: 2.5rem;
}

.options a {
  font-weight: bold;
  color: #ffaaaa;
}

.options a.router-link-exact-active {
  color: #fe7777;
}
</style>
