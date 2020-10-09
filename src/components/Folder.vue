<template>
  <li class="folder is-folder">
    <span>
      {{ folder.name }}
    </span>
    <Actions :folder="folder"></Actions>
    <ul
        v-if="folder.children && folder.children.length > 0"
        class="sub-folders"
    >
      <template v-for="child in folder.children">
        <folder
            :key="child.id"
            :folder="child"
        ></folder>
      </template>
    </ul>
  </li>
</template>

<script>
    import Actions from '@/components/Actions.vue'

  export default {
    name: 'Folder',
    props: {
      folder: {
        type: Object,
        required: true
      },
    },
    components: {
      Actions,
    }
  }
</script>

<style scoped lang="scss">
  li {
    &.is-folder {
      padding: 1rem;
      border-left: 1px solid #d3d3d3;
      margin-bottom: 0.5rem;

      & > span {
        padding: 0.5rem;
        border: 1px solid #d3d3d3;
        cursor: pointer;
        display: inline-block;
      }

      button {
        margin-left: 10px;
      }
    }

    .sub-folders {
      padding: 1rem 1rem 0 0;
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      list-style: none;
    }

    .folder-empty {
      padding: 1rem 1rem 0 0;
      color: #000;
      opacity: 0.5;
      border: none;
    }
  }
</style>
