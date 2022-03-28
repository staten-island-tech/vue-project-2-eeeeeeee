<template>
  <div class="home">
    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>
          {{ blog.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const blogs = ref([
      { title: "1", text: "a" },
      { title: "2", text: "b" },
      { title: "3", text: "c" },
    ]);
    const store = useStore();

    console.log(store.state.user);
    return {
      blogs,
    };
  },
};
</script>
