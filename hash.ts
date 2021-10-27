type KeyValueStructure<T, V> = {
  key: T;
  value: V;
}[];

class HashTable<T extends string, V> {
  table: KeyValueStructure<T, V>[];

  constructor() {
    this.table = new Array(127);
  }

  _hash(key: T) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key: T, value: V) {
    const i = this._hash(key);
    this.table[i] = this.table[i].concat({ key: key, value: value });
  }

  get(key) {
    const i = this._hash(key);
    return this.table[i];
  }

  delete(key) {
    const i = this._hash(key);

    if (this.table[i] && this.table[i].length) {
    }
  }

  clear() {}

  entries() {}

  has() {}

  keys() {}

  values() {}

  forEach() {}
}

class X {
  u: number
  z: number
}

var n = new X()
n.u = 1;
n.z = 9

var map = new Map()
map.set(n, 1)