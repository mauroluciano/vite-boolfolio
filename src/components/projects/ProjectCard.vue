<script>
export default {
  data() {
    return {
      title: "Hello wrod",
    };
  },

  props: {
    projects: Object,
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h4>{{ project.name }}</h4>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
