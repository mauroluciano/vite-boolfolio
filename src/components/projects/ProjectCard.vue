<script>
export default {
  data() {
    return {
      title: "Hello wrod",
    };
  },

  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h4>{{ project.name }}</h4>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
