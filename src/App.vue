<template>
  <div id="app">
    <div class="tree">
      <h3>TREE</h3>
      <ul>
        <folder :folder="root"></folder>
      </ul>
    </div>
  </div>
</template>

<script>

  import Folder from '@/components/Folder.vue'
  import {mapState} from "vuex";

  export default {
    name: 'App',
    components: {
      Folder,
    },
    computed: {
      ...mapState({
        root: state => state.global.root
      }),
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  ul {
    text-align: left;
    list-style-type: none;
  }

  ul.folders {
    padding: 1rem;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    list-style: none
  }

  ul.folders > li:first-child {
    padding: 1rem 1rem 1rem 0
  }
</style>
