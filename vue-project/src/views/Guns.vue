<template>
  <div>
    <div class="container">
      <GunCard
        v-for="gun in list"
        :key="gun.uuid"
        :name="gun.displayName"
        :img="gun.displayIcon"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import GunCard from "../components/GunCard.vue";

export default {
  data() {
    return { list: [] };
  },
  components: { GunCard },
  setup() {
    const store = useStore();

    console.log(store.state.user);
  },
  async created() {
    try {
      const response = await fetch("https://valorant-api.com/v1/weapons");

      const { data: list } = await response.json();

      this.list = list;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.container {
  background-color: #b5b5b5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
