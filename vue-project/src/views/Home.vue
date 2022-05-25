<template>
  <div class="home">
    <div v-if="!user" class="not-user">You Don't Get to See This</div>
    <div v-else-if="ready" class="user">
      <SkinCard
        v-for="skin in list"
        :key="skin.uuid"
        :name="skin.displayName"
        :img="skin.displayIcon"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import SkinCard from "../components/SkinCard.vue";

export default {
  components: { SkinCard },
  setup() {
    const store = useStore();

    console.log(store.state.user);

    return {
      user: computed(() => store.state.user),
    };
  },
  data: () => {
    return {
      ready: false,
    };
  },
  async created() {
    try {
      const response = await fetch("https://valorant-api.com/v1/weapons/skins");

      const { data: list } = await response.json();

      this.list = list.filter((skin) => skin.displayIcon != null);
      this.ready = true;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.not-user {
  font-size: 25rem;
}
.user {
  background-color: #b5b5b5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
