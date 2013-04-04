var makeHashTable = function(){

  var hashTable = {
    storage: [],
    user_keys: [],
    max_size: 1000,
    insert: function(user_key, value) {
      var system_key = getIndexBelowMaxForKey(user_key, hashTable.max_size);

      //Case no collisions
      if (hashTable.storage[system_key] === undefined) {
        hashTable.storage[system_key] = value;
        hashTable.user_keys[system_key] = user_key;
        return true;
      }
      //Case 1st collision - create new array inside existing storage array[system_key]
      else if (Object.prototype.toString.call(hashTable.user_keys[system_key]) != '[object Array]') {          
        var existing_value = hashTable.storage[system_key];
        
        //Handle user_key collision in user_keys[]
        var user_key_collision = [];
        var existing_user_key = hashTable.user_keys[system_key];
        user_key_collision.push(existing_user_key);
        user_key_collision.push(user_key);
        hashTable.user_keys[system_key] = user_key_collision;

        //Handle value collision in storage[]
        var collision_storage = [];    
        collision_storage.push(existing_value);
        collision_storage.push(value);
        hashTable.storage[system_key] = collision_storage;
      }
      //Case there has already been a collision, add new keys/values to the subarray
      else {
        hashTable.user_keys[system_key].push(user_key);
        hashTable.storage[system_key].push(value);
      }   
    },
    retrieve: function(user_key) {
      var system_key = getIndexBelowMaxForKey(user_key, hashTable.max_size);

      //Case nothing stored at location
      if (hashTable.storage[system_key] === undefined) {
        return false;
      }
      //Case only 1 key - don't search collision array
      else if (Object.prototype.toString.call(hashTable.storage[system_key]) != '[object Array]') {  
        var index = hashTable.user_keys[system_key];  
        return hashTable.storage[system_key];
      }
      //Case multiple collisions - search collision array
      else {
        //look up user key index to get position in storage array
        var user_key_index = hashTable.user_keys[system_key];
        var count = 0;
        while (count < hashTable.user_keys[system_key].length) {
          if (user_key === hashTable.user_keys[system_key][count]) {
            user_key_index = count;
            break;
          }
          count++;
        }

        var value = hashTable.storage[system_key][user_key_index];;
        if (value === undefined) {
          return false;
        }
        else {
          return value;
        }
      }
    },
  };
  return hashTable;
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key

var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    hash = (hash<<5) - hash;
    hash = hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash % max);
};

