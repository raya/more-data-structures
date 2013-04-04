describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  describe("Available methods", function() {
    it("should have a method named 'insert'", function() {
      expect(linkedList.insert).toEqual(jasmine.any(Function));
    });

    it("should have a method named 'contains'", function() {
      expect(linkedList.contains).toEqual(jasmine.any(Function));
    });

    it("should have a method named 'tail' that retrieves the last node", function() {
      expect(linkedList.tail).toBeDefined();
    });
  })

  describe("node object", function() {
    it("should contain a content field", function() {
      expect(linkedList.node.content).toBeDefined();
    });

    it("should contain a pointer function to the next node", function() {
      expect(linkedList.node.points_to).toBeDefined();
    });

    it("should have a points_to property which is null by default", function() {
      expect(linkedList.node.points_to).toBe(null);
    });
  });

  describe("Adding nodes", function() {

    it("should be able to add a node to the list", function() {
      linkedList.insert("Item-1");
      expect(linkedList.contains("Item-1")).toBe(true);
    });
    it("should have a first node which becomes the tail", function() {
      linkedList.insert("Item-1");
      expect(linkedList.tail.content).toEqual("Item-1");
    });
    it("should have a 2nd node which becomes the tail", function() {
      linkedList.insert("Item-1");
      linkedList.insert("Item-2");
      expect(linkedList.tail.content).toEqual("Item-2");
    });
    it("should be able to add multiple nodes", function() {
      linkedList.insert("item-1");
      expect(linkedList.contains("item-2")).toBe(false);
      expect(linkedList.contains("item-15")).toBe(false);
      linkedList.insert("Item-3");
      linkedList.insert("Item-4");
      linkedList.insert("Item-5");
      expect(linkedList.contains("Item-3")).toBe(true);
      expect(linkedList.contains("Item-5")).toBe(true);
      expect(linkedList.contains("NOT-HERE")).toBe(false);
    });
  });

  describe("the contains method", function() {
    it("should return false if the linked list is empty", function() {
      expect(linkedList.contains("")).toBe(false);
    });
    it("should return true if the item is in a linked list with 1 element", function() {
      linkedList.insert("Item-1");
      expect(linkedList.contains("Item-1")).toBe(true);
    });
    it("should return true if the item is in a linked list with at least 2 elements", function() {
      linkedList.insert("Item-1");
      linkedList.insert("Item-2");
      expect(linkedList.contains("Item-2")).toBe(true);
    });
    it("should return false if the item is not in the linked list", function() {
      linkedList.insert("Item-1");
      expect(linkedList.contains("Anything")).toBe(false);
    });
  });
});