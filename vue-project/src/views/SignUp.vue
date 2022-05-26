<template>
  <div>
    <form @submit.prevent="handleSubmit" id="form" class="add">
      <h3>Sign up</h3>

      <label for="email">Email:</label>
      <input
        class="inputs"
        type="email"
        name="email"
        id="email"
        v-model="email"
        required
      />

      <label for="password">Password:</label>
      <input
        class="inputs"
        type="password"
        name="password"
        id="password"
        v-model="password"
        required
      />

      <button class="button">Sign up</button>
      <div v-if="error">{{ error }}</div>

      <h5>Already Have An Account?</h5>
      <router-link to="/login" class="log-in">Log In</router-link>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
// usestore = $this.store (Using Option API)
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
        await store.dispatch("signup", {
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
  margin: 10rem 25rem 10rem 25rem;

  display: flex;
  flex-direction: column;
  font-size: 3.5rem;
}

.inputs {
  margin: auto;
  width: 35%;
  font-size: 2rem;
}

.log-in {
  font-size: 1.5rem;
}

.button {
  margin: 2.5rem auto auto auto;
  font-size: 1.5rem;
  color: #fe7777;
  background-color: #1c223c;
  width: 20%;
  font-family: Changa, sans-serif;
}
</style>
