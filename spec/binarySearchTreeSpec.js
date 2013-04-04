describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have a root", function() {
    expect(Object.keys(binarySearchTree)).toContain("root");
  });

  it("should have a method named 'insert'", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'search'", function() {
    expect(binarySearchTree.search).toEqual(jasmine.any(Function));
  });
  it("should have a method named 'children'", function() {
    expect(binarySearchTree.children).toEqual(jasmine.any(Function));
  });
  
  it("should make the first inserted item the root", function() {
    binarySearchTree.insert("root");
    expect("root").toEqual(binarySearchTree.root.content);
  });
  
  it("should insert an element smaller than the root to the left side", function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    expect(binarySearchTree.root.left.content).toEqual(5);
  });
  it("should insert an element larger than the root to the right side", function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    expect(binarySearchTree.root.right.content).toEqual(15);
  });
  it("should be able to insert 2 elements to the left of each other", function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(8);
    binarySearchTree.insert(6);
    expect(binarySearchTree.root.left.content).toEqual(8);
    expect(binarySearchTree.root.left.left.content).toEqual(6);
  });
  it("should be able to insert 2 elements to the right of each other", function() {
    binarySearchTree.insert(10);
    binarySearchTree.insert(12);
    binarySearchTree.insert(14);
    expect(binarySearchTree.root.right.content).toEqual(12);
    expect(binarySearchTree.root.right.right.content).toEqual(14);
  });
  
  describe("Inserting", function() {
    it("should be able to insert 1 element to left and right of tree", function() {
      binarySearchTree.insert(10);
      binarySearchTree.insert(5);
      binarySearchTree.insert(15);
      expect(binarySearchTree.root.left.content).toEqual(5);
      expect(binarySearchTree.root.right.content).toEqual(15);
    });

    it("should be able to insert several elements deep in tree", function() {
      binarySearchTree.insert(8);
      binarySearchTree.insert(3);
      binarySearchTree.insert(10);
      binarySearchTree.insert(1);
      binarySearchTree.insert(6);
      binarySearchTree.insert(14);
      binarySearchTree.insert(7);
      binarySearchTree.insert(13);
      expect(binarySearchTree.root.left.content).toEqual(3);
      expect(binarySearchTree.root.right.content).toEqual(10);
      expect(binarySearchTree.root.left.left.content).toEqual(1);
      expect(binarySearchTree.root.left.right.content).toEqual(6);
      expect(binarySearchTree.root.right.right.content).toEqual(14);
      expect(binarySearchTree.root.left.right.right.content).toEqual(7);
      expect(binarySearchTree.root.right.right.left.content).toEqual(13);
    });
  });
  
  describe("children ", function() {
    it("should print out all nodes in the array", function() {

    });
  });

  describe("Searching", function() {
    it("should be able to find elements", function() {
      binarySearchTree.insert(8);
      binarySearchTree.insert(3);
      binarySearchTree.insert(10);
      expect(binarySearchTree.search(10)).toBe(true);
    });
    it("should return false for elements not in tree", function() {
      binarySearchTree.insert(8);
      binarySearchTree.insert(3);
      binarySearchTree.insert(10);
      expect(binarySearchTree.search(300)).toBe(false);
    });
  });
    describe("Children ", function() {
      it("should print out a list of nodes", function() {
        binarySearchTree.insert(8);
        binarySearchTree.insert(3);
        binarySearchTree.insert(10);
        binarySearchTree.insert(1);
        binarySearchTree.insert(6);
        expect(binarySearchTree.children()).toEqual([1, 3, 6, 8, 10]);

      });
    });
  
});