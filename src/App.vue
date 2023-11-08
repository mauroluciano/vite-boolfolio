<script>
import ProjectList from "./components/projects/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],

      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: { ProjectList },

  methods: {
    fetchProjects() {
      axios.get(this.api.baseUrl + "projects").then((response) => {
        this.projects = response.data.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <h1>hello world</h1>
  <ProjectList />
</template>
<style lang="scss"></style>
