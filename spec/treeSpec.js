describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });
  
  it("should have a method named 'addChild'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'traverse'", function() {
    expect(tree.traverse).toEqual(jasmine.any(Function));
  });

  describe("Adding nodes", function() {
    it("should be able to add new nodes to the root", function() {
      tree.addChild("Child-1");
      tree.addChild("Child-2");
      expect(tree.children[0].content).toEqual("Child-1");
      expect(tree.children[1].content).toEqual("Child-2");
    });

    it("should be able to add a child to the root", function() {
      tree.addChild("Parent");
      tree.children[0].addChild("Child");
      expect(tree.children[0].children[0].content).toBe("Child");
    });

    it("should be able to add multiple children to a root", function() {
      tree.addChild("Parent");
      tree.children[0].addChild("Child-1");
      tree.children[0].addChild("Child-2");
      tree.children[0].children[0].addChild("Baby-1");
      tree.children[0].children[1].addChild("Baby-2");
      expect(tree.children[0].children[0].children[0].content).toEqual("Baby-1");
      expect(tree.children[0].children[1].children[0].content).toEqual("Baby-2");
    });
  });

  describe("Contains method", function() {
    it("should returns false if the tree contains no nodes", function(){
      expect(tree.contains("Parent")).toBe(false);
    });
    it("should be true if item is found in tree with 1 sub level", function() {
      tree.addChild("Child-1");
      tree.addChild("Child-2");
      expect(tree.contains("Child-1")).toBeTruthy();
    });
    it("should be true if item is found in tree with > 1 sub level", function() {
      tree.addChild("Child-1");
      tree.addChild("Child-2");
      tree.children[0].addChild("Baby of Child 1");
      expect(tree.contains("Baby of Child 1")).toBeTruthy();
    });
    it("should be false if item is not found in tree with > 1 sub level", function() {
      tree.addChild("Child-1");
      tree.addChild("Child-2");
      tree.children[0].addChild("Baby of Child 1");
      expect(tree.contains("Random Child")).toBeFalsy();
    });
  });

  describe("Traversing the tree", function() {
    it("should return child nodes 1 level deep", function() {
      tree.addChild("One");
      tree.addChild("Two");
      tree.addChild("Three");
      expect(tree.traverse(tree)).toEqual(["One", "Two", "Three"]);
    });
    it("should return child nodes 1 level deep", function() {
      tree.addChild("Child1");
      tree.children[0].addChild("Baby of Child 1");
      tree.addChild("2nd Child");
      tree.addChild("Baby of Child 2");
      expect(tree.traverse(tree)).toEqual(["Child1", "Baby of Child 1", "2nd Child", "Baby of Child 2"]);
    });
  });

  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
});

