var makeTree = function(content){
  var tree = {
    content: content,
    children: [],
    addChild: function(content) {
      tree.children.push(makeTree(content));
    },
    //Traverses tree and creates list of nodes
    traverse: function(branch) {
      var nodes = [];
      var recurse = function(branch) {
        //Print leaves of tree
        if (branch.children.length < 1) {         //branch has no children
          if (branch.content === undefined) {     //Case Root with no children
            return branch;
          }
          else {                                  //Case node with no children
            return branch.content;
          }
        }
        //Print children 
        else {
          var arr_length = branch.children.length;
          var count = 0;
          while (count < arr_length) {
            nodes.push(branch.children[count].content);
            recurse(branch.children[count]);  
            count += 1;
          }
        }
      };
      recurse(branch);
      return nodes;
  },
  //Checks if item is found in tree using traverse()
    contains: function(item) {
      var node_list = tree.traverse(tree);
      var count = 0;
      while (count < node_list.length ) {
        if (node_list[count] === item) {
          return true;
        }
        count += 1;
      }
      return false;
    }
  };
return tree;

};