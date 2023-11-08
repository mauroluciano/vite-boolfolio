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
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        console.log(response);
        this.projects = response.data;
        console.log(response.data);
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
  <ProjectList :projects="projects" />
</template>
<style lang="scss"></style>
