<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <div class="img-container">
      <img class="img" :src="img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: { name: String, img: String },
};
</script>

<style scoped>
.card {
  background-color: #161928;

  border: 1rem ridge #db4141;
  margin: 4rem 1rem 4rem 1rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  height: 27rem;
  width: 20%;
}
.img-container {
  box-shadow: 0 0 1rem #c79e9e;
  margin: 1rem auto 1rem auto;
  width: 85%;
  height: 70%;
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
</style>
