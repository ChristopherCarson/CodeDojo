class node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// This tree is:
// head1 = 0  -  NOT binary search
//        / \
//       1   2
//      /\   /\
//     3  4 5  6

var head1 = new node(0)
head1.left = new node(1)
head1.right = new node(2)
head1.left.left = new node(3)
head1.left.right = new node(4)
head1.right.left = new node(5)
head1.right.right = new node(6)

// This tree is:
//  head2 = 3  -  NOT binary search
//        /   \
//       1     4
//      /\    / \
//     0  2  5   6

var head2 = new node(3)
head2.left = new node(1)
head2.right = new node(4)
head2.left.left = new node(0)
head2.left.right = new node(2)
head2.right.left = new node(5)
head2.right.right = new node(6)

// This tree is:
//  head3 = 3  -  IS binary search
//        /   \
//       1     5
//      /\    / \
//     0  2  4   6

var head3 = new node(3)
head3.left = new node(1)
head3.right = new node(5)
head3.left.left = new node(1)
head3.left.right = new node(2)
head3.right.left = new node(4)
head3.right.right = new node(6)



var isBST = (node, min = null, max = null) => {
    if (min !== null) {
        if (node.value < min) return false
    }
    if (max !== null) {
        if (node.value > max) return false
    }

    if (node.right !== null && node.left !== null) {
        return isBST(node.right, node.value, max) && isBST(node.left, min, node.value)
    } else if (node.right !== null) {
        return isBST(node.right, node.value, max)
    } else if (node.left !== null) {
        return isBST(node.left, min, node.value)
    } else {
        return true
    }
}

console.log(isBST(head1))
console.log(isBST(head2))
console.log(isBST(head3))