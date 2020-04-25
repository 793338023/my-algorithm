// LRU 缓存机制

function removeKey(keys, key) {
  const index = keys.indexOf(key);
  if (~index) {
    keys.splice(index, 1);
  }
}

function removeData(data, key) {
  if (data[key]) {
    delete data[key];
  }
}

class LRUCache {
  keys = [];
  data = {};
  max = 0;
  constructor(maxLen = 0) {
    this.max = maxLen;
  }
  put(key, val) {
    const item = this.data[key];
    if (item) {
      this.data[key] = val;
    } else {
      this.keys.push(key);
      this.data[key] = val;
    }
    if (this.max > 1 && this.keys.length > this.max) {
      const key = this.keys[0];
      removeKey(this.keys, key);
      removeData(this.data, key);
    }
  }
  get(key) {
    if (~this.keys.indexOf(key)) {
      removeKey(this.keys, key);
      this.keys.push(key);
      return this.data[key];
    } else {
      return null;
    }
  }
}

export default LRUCache;

const cache = new LRUCache(2 /* 缓存容量 */);
cache.put("a", 1);
cache.put("b", 2);
cache.get("a"); // 返回  1
cache.put("c", 3); // 该操作会使得密钥 2 作废
cache.get("b"); // 返回 -1 (未找到)
cache.put("d", 4); // 该操作会使得密钥 1 作废
console.log(cache.get("a"), 111); // 返回 -1 (未找到)
console.log(cache.get("c"), 111); // 返回  3
console.log(cache.get("d"), 111); // 返回  4
