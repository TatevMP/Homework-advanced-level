const nodes = [
    {id: 1, parentId: null},
    {id: 2, parentId: 1},
    {id: 3, parentId: 1},
    {id: 4, parentId: 2},
    {id: 5, parentId: 2},
    {id: 6, parentId: 3},
    {id: 7, parentId: 4},
    {id: 8, parentId: 7},
    {id: 9, parentId: 8},
]

function createTree1(nodes) {
    const tree = {}
    const map = new Map()

    nodes.forEach(node => {
        map.set(node.id, {...node, children: {}})
    })

    nodes.forEach(node => {
        if (node.parentId === null) {
            tree[node.id] = map.get(node.id).children
        } else {
            const parent = map.get(node.parentId).children
            parent[node.id] = map.get(node.id).children
        }
    })

    return tree
}



// 2. Function for tree2

function createTree2(nodes) {
    const map = new Map
    nodes.forEach(node => {
        map.set(node.id, {...node, children: []})
    })

    const tree = Array.from(map.values()).filter(node => node.parentId === null)[0]

    nodes.forEach(node => {
        if (node.parentId !== null) {
            const parent = map.get(node.parentId)
            parent.children.push(map.get(node.id))
        }
    })

    return tree
}



//3.additional work

function sum(a, b) {
    console.log('asd', this)
    return a + b
  }
    function decorator(func) {
    return function(...args) {
      console.log('asd', this)
      return func.apply(this, args)
    }
  }
  