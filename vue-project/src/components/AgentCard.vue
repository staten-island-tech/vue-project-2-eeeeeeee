<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <div class="img-container">
      <img class="img" :src="img" alt="" />
    </div>
    <h2>{{ description }}</h2>
  </div>
</template>

<script>
export default {
  props: { name: String, img: String, description: String },
};
</script>

<style scoped>
.card {
  background-color: #1c223c;

  border: 1rem ridge #fb4c4c;
  margin: 4rem 1rem 4rem 1rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  height: 40rem;
  width: 25%;
}
.img-container {
  box-shadow: 0 0 1rem #c79e9e;
  margin: 1rem auto 1rem auto;
  width: 55%;
  height: 55%;
  object-fit: contain;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

h1 {
  color: #fe7777;
  font-size: 3rem;
}
h2 {
  color: #fe7777;
  font-size: 1.3rem;
}
</style>
