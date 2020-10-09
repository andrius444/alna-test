const genNewFolder = data => {
  return {
    id: data.name.toLowerCase(),
    parentId: data.parentId,
    name: data.name,
    lvl: data.lvl + 1,
    children: []
  }
}

export default {
  genNewFolder,
}
