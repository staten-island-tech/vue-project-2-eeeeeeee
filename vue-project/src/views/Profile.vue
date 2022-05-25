<template>
  <div>
    <h3>Hello {{ user.email }}</h3>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.state.user),
    };
  },
};
</script>

<style>
#form {
  background-color: #b5b5b5;
  display: flex;
  flex-direction: column;
  font-size: 3.5rem;
}

.inputs {
  margin: auto;
  width: 35%;
  font-size: 2rem;
}

.sign-up {
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
