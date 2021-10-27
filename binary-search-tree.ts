class TreeNode {
  key: number;
  left: TreeNode;
  right: TreeNode;

  constructor(value) {
    this.key = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode;
  constructor(rootValue) {
    this.root = new TreeNode(rootValue);
  }

  insert(currentNode: TreeNode, newValue: number): TreeNode {
    if (currentNode === null) {
      return new TreeNode(newValue);
    } else if (currentNode.key > newValue) {
      currentNode.left = this.insert(currentNode, newValue);
    } else {
      currentNode.right = this.insert(currentNode, newValue);
    }
    return currentNode;
  }

  insertBst(newValue) {
    this.insert(this.root, newValue);
  }
}

function inOrderPrint(currentNode: TreeNode) {
  if (currentNode !== null) {
    inOrderPrint(currentNode.left);
    console.log(currentNode);
    inOrderPrint(currentNode.right);
  }
}
