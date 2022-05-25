<template>
  <div>
    <div class="container">
      <AgentCard
        v-for="agent in list"
        :key="agent.uuid"
        :name="agent.displayName"
        :img="agent.bustPortrait"
        :description="agent.description"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import AgentCard from "../components/AgentCard.vue";

export default {
  data() {
    return { list: [] };
  },
  components: { AgentCard },
  setup() {
    const store = useStore();

    console.log(store.state.user);
  },
  async created() {
    try {
      const response = await fetch("https://valorant-api.com/v1/agents");

      const { data: list } = await response.json();

      this.list = list.filter((agent) => agent.isPlayableCharacter == true);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.container {
  background-color: #b5b5b5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
