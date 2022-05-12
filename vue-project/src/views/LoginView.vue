<template>
  <div>
    <form @submit.prevent="handleSubmit" id="form">
      <h3>Login</h3>

      <label for="email">Email:</label>
      <input type="email" name="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" name="password" v-model="password" required />

      <button>Login</button>
      <div v-if="error">{{ error }}</div>
    </form>
    <h5>Don't Have An Account?</h5>
    <router-link to="/signup" class="sign-up">Sign Up</router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);
    const store = useStore();
    const router = useRouter();
    const handleSubmit = async () => {
      try {
        await store.dispatch("login", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    };
    return { handleSubmit, email, password, error };
  },
};
</script>

<style>
#form {
  font-size: 5rem;
}

.sign-up {
  font-size: 1.5rem;
}
</style>
