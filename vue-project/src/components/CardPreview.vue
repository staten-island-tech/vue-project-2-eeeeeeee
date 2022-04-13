<template>
  <div class="container">
    <img src="{{card.img_url}}" alt="" />
    <h1 id="query">{{ card.name }}</h1>
    <h2>{{ card.id }}</h2>
  </div>
</template>

<script>
export default {
  props: { card: Object },
};
</script>

<style scoped>
.container {
  margin: 1rem 1rem 1rem 1rem;
}
div {
  background-color: green;
}
h1 {
  font-size: 6rem;
}
h2 {
  font-size: 3rem;
}
</style>
