<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <h1>Boolfolio</h1>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item p-3">
            <router-link :to="{ name: 'homepage' }">Home</router-link>
          </li>
          <li class="nav-item p-3">
            <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>
<style lang="scss"></style>
