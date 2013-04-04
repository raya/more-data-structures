/*

"Password", "NewPass1", "NewPass12", and "Wordy" map to the key 3 when max_size set to 5. These are used to test collisions.
*/

describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = makeHashTable();
  });

  describe("getIndexBelowMaxForKey method", function() {
    beforeEach(function() {
      max_size = 2;
      key1 = getIndexBelowMaxForKey("Password1", max_size);
      key2 = getIndexBelowMaxForKey("Password2", max_size);
      key3 = getIndexBelowMaxForKey("Password3", max_size);
    });
    it("should return a number that is less than the max", function() {
      expect(key1).toBeLessThan(max_size);
      expect(key2).toBeLessThan(max_size);
      expect(key3).toBeLessThan(max_size);
    });
    it("should always return a positive number or 0", function() {
      expect(key1).toBeGreaterThan(-1);
      expect(key2).toBeGreaterThan(-1);
      expect(key3).toBeGreaterThan(-1);
    });
  });

  describe("User Keys array", function() {
    it("should be blank at initialization ", function() {
      expect(hashTable.user_keys.length).toBe(0);
    });
    it("should contain the submitted user key on the first insert", function() {
      hashTable.max_size = 1;
      hashTable.insert("Password", 55);
      expect(hashTable.user_keys[0]).toEqual("Password");
    });
    it("should contain the submitted user keys in spite of collision", function() {
      hashTable.max_size = 1;
      hashTable.insert("Password-1", 55);
      hashTable.insert("Password-2", 66);
      expect(hashTable.user_keys[0][0]).toEqual("Password-1");
      expect(hashTable.user_keys[0][1]).toEqual("Password-2");
    });
  });

  describe("Inserting when there are no collisions", function() {
    beforeEach(function() {
      hashTable.insert("Password", 55);
    });
    it("should store a key in an array then be able to retrieve it", function() {
      expect(hashTable.retrieve("Password")).toEqual(55);
    });
    it("should return false for a non-existing key", function() {
      expect(hashTable.retrieve("NonExistant")).toBe(false);
    });
  });

  describe("Inserting with 1 collision", function() {
    beforeEach(function() {
      hashTable.max_size = 1;
      hashTable.insert("Password", 55);
      hashTable.insert("NewPass1", 66);
    });

    it("should return values which are in the table even if they have the same key", function() {
      expect(hashTable.retrieve("Password")).toEqual(55);
      expect(hashTable.retrieve("NewPass1")).toEqual(66);
    });

    it("should return false for a non-existing key", function() {
      expect(hashTable.retrieve("NonExistant")).toBe(false);
    });
  });

  describe("Inserting with multiple collisions", function() {
    beforeEach(function() {
      hashTable.max_size = 1;
      hashTable.insert("Password", "Insert1");
      hashTable.insert("NewPass1", "Insert2");
      hashTable.insert("NewPass12", 77);
    });

    it("should return values which are in the table", function() {      
      expect(hashTable.retrieve("Password")).toEqual("Insert1");
      expect(hashTable.retrieve("NewPass1")).toEqual("Insert2");
      expect(hashTable.retrieve("NewPass12")).toEqual(77);
    });

    it("should return false for a non-existing key", function() {
      expect(hashTable.retrieve("NonExistant")).toBe(false);
    });
  });

});