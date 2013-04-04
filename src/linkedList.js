// Note: don't use an array to do this.
var makeLinkedList = function(){
  var linkedList = {
    tail: null,
    node: {
      content: "",
      points_to: null
    },
    insert: function(item) {
      var new_node = Object.create(linkedList.node);
      new_node.content = item;
      new_node.points_to = linkedList.tail;
      linkedList.tail = new_node;
    },
    //Handle case when 0 nodes
    contains: function(item) {
      if (linkedList.tail === null) {    
        return false;
      }
      var next_node = "";
      var cur_node = linkedList.tail;

      //Handle case when only 1 node
      if (cur_node.points_to != null) {
        next_node = cur_node.points_to;
      }
      //Search through all nodes
      do  {
        if (cur_node.content === item)  {
          return true;
        }
        else {
          if ((next_node === undefined) || (next_node.points_to === null)) {
            return false;
          }
          cur_node = next_node;
          next_node = next_node.points_to;
        }
      } while (cur_node.points_to != null);
      return false;
    },
  };
  return linkedList;
}