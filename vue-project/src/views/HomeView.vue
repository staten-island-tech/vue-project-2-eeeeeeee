<template>
  <div class="home">
    <CardPreview v-for="(card, index) in list" :key="index" :card="card" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import CardPreview from "../components/CardPreview.vue";

export default {
  data() {
    return { list: [] };
  },
  components: { CardPreview },
  setup() {
    const store = useStore();

    console.log(store.state.user);
  },
  // async created() {
  //   try {
  //     const response = await fetch(
  //       "https://db.ygoprodeck.com/api/v7/cardinfo.php"
  //     );

  //     const { data: list } = await response.json();

  //     this.list = list;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
</script>

<style></style>
