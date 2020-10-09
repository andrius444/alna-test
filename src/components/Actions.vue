<template>
  <div class="actions">
    <button @click="create">+</button>
    <button
        v-if="folder.parentId !== $options.IDS.Root && folder.id !== $options.IDS.Root"
        @click="up"
    >
      ^
    </button>
    <!--<button-->
        <!--@click="down"-->
        <!--:class="{disabled: folder.children.length === 0}"-->
    <!--&gt;-->
      <!--v-->
    <!--</button>-->
  </div>
</template>

<script>
  import {mapActions} from "vuex";
  import {IDS} from '@/constants/basic.constants'

  export default {
    name: 'Actions',
    IDS,
    props: {
      folder: {
        type: Object,
        required: true
      }
    },
    methods: {
      create() {
        this.createFolder({
          name: `${this.folder.name}-${this.folder.children.length + 1}`,
          lvl: this.folder.lvl,
          parentId: this.folder.id
        })
      },
      up() {
        this.lvlUp(this.folder)
      },
      down() {
        this.lvlDown(this.folder)
      },
      ...mapActions({
        createFolder: 'createFolder',
        lvlUp: 'lvlUp',
        lvlDown: 'lvlDown'
      }),
    }
  }
</script>

<style scoped lang="scss">
  .actions {
    display: inline-block;
    margin-left: 10px;

    button {
      margin-right: 5px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
