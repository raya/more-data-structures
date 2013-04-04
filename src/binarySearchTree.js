var makeBinarySearchTree = function(content){
  var treeNode = {
    root: null,
    node: {
      content: content,
      left: null,
      right: null,
    },
    insert: function(content) {
      //Case there is no root
      if (treeNode.root === null) {
        var new_node = Object.create(treeNode.node);
        new_node.content = content;
        treeNode.root = new_node;
        return true;
      }

      var x = treeNode.root;
      var y = null;
      while (x != null) {
        y = x;
        //Crawl left if content < current node node
        if (content < x.content) {
          if (x.left == null) {
            var new_node = Object.create(treeNode.node);
            new_node.content = content;
            y.left = new_node;
            return true;
          }
          //Contine traversing
          else {
            x = x.left;
          }
        }
        //Crawl right if content > current node head
        else if (content > x.content) {
          if (x.right == null) {
            var new_node = Object.create(treeNode.node);
            new_node.content = content;
            y.right = new_node;
            return true;
          }
          else {
            x = x.right;
          }
        }
      }
    },
    search: function(content) {
      var found;
      var inorder_walk = function(subtree, content) {
        if (subtree != undefined) {
          console.log("Examining: " + subtree.content);
          inorder_walk(subtree.left, content);
          if (subtree.content === content) {
            found = true;
            return found;
          }
          inorder_walk(subtree.right, content);
          }
      };
      inorder_walk(treeNode.root, content);
      if (found) {
        return true;
      }
      else {
        return false;
      }
    },
    children: function() {
      var node_list = [];
      var inorder_walk = function(subtree) {
        if (subtree != undefined) {
          inorder_walk(subtree.left);
          node_list.push(subtree.content);
          inorder_walk(subtree.right);
          }
      };
      inorder_walk(treeNode.root);
      return node_list;
    },
    
  };
  return treeNode;
}

var generateUniqueNumbers = function(start, numbers_to_make) {
  var num_list = []
  for (var i = 0; i < numbers_to_make; i++) {
    num_list.push(i);
  }
  return num_list;
}
