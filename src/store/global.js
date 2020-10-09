import Helper from '@/utils/basics.helper'
import {IDS} from '@/constants/basic.constants'

const state = () => ({
  root: {
    id: IDS.Root,
    parentId: null,
    name: 'Root',
    lvl: 0,
    children: []
  }
})

const getters = {
  getStructure(state) {
    return state.root
  }
}

// actions
const actions = {
  createFolder({commit, state}, data) {
    const root = state.root
    const newFolder = Helper.genNewFolder(data)

    if (newFolder.lvl === 1) {
      root.children.push(newFolder)
    } else {
      const rootChildren = root.children

      const search = children => {
        for (let i = 0; i < children.length; i++) {
          const item = children[i]

          if (item.id === newFolder.parentId) {
            item.children.push(newFolder)
            return;
          } else {
            search(item.children)
          }
        }
      }

      search(rootChildren)

      root.children = rootChildren;
    }

    commit('setRoot', root)
  },
  lvlUp({commit, state}, data) {
    const root = state.root
    const rootChildren = root.children

    const search = children => {
      for (let i = 0; i < children.length; i++) {
        const item = children[i]

        if (item.id === data.parentId && data.parentId !== IDS.Root) {
          console.log('CHILDREN', item)
          item.children = item.children.filter(c => c.id !== data.id)
          children.push({...data, parentId: item.parentId})
          return;
        } else {
          search(item.children)
        }
      }
    }

    search(rootChildren)

    root.children = rootChildren;

    commit('setRoot', root)
  },
  lvlDown({commit, state}, data) {
    console.log('LVL DOWN', data)
    commit('setRoot', state.root)
  }
}

// mutations
const mutations = {
  setRoot(state, data) {
    state.root = data
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}