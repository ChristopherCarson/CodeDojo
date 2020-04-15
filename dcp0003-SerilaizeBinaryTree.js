class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// This tree is:
// head1 = 0  -  NOT binary search
//        / \
//       1   2
//      /\   /\
//     3  4 5  6

var head1 = new node(0);
head1.left = new node(1);
head1.right = new node(2);
head1.left.left = new node(3);
head1.left.right = new node(4);
head1.right.left = new node(5);
head1.right.right = new node(6);

var serialize = (node) => {
  if (node === null) return '#';
  else
    return (
      node.value + ' ' + serialize(node.left) + ' ' + serialize(node.right)
    );
};

var deserialize = (data) => {
  var index = 0;
  var helper = () => {
    var val = vals[index];
    index++;
    if (val === '#') return null;
    var root = new node(val);
    root.left = helper();
    root.right = helper();
    return root;
  };
  var vals = data.split(' ');
  return helper();
};

console.log(serialize(head1));

console.log(serialize(deserialize(serialize(head1))));
