// first task
class BaseStorage {
  constructor(maxSize = 10) {
    if (typeof maxSize !== "number" || maxSize <= 0) {
      throw new Error("your maxSize should be a positive number");
    }
    this.storage = [];
    this.maxSize = maxSize;
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  toArray() {
    return [...this.storage];
  }

  push(el) {
    if (this.storage.length >= this.maxSize) {
      throw new Error("storage is full");
    }
    this.storage.push(el);
    return this.storage;
  }

  static fromIterable(iterable) {
    if (!iterable || typeof iterable[Symbol.iterator] !== "function") {
      throw new Error("not an iterable");
    }

    const newStorage = new this(iterable.length);
    for (const item of iterable) {
      newStorage.push(item);
    }

    return newStorage;
  }
}

// second task

class Stack extends BaseStorage {
  pop() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    }
    const lastItem = this.storage.pop();
    console.log(`${lastItem} removed`);
    return this.storage;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    }

    const topItem = this.storage[this.storage.length - 1];
    return `topItem is: ${topItem}`;
  }
}

// third task

class Queue extends BaseStorage {
  shift() {
    if (this.isEmpty()) {
      throw new Error("storage is empty");
    }
    this.storage.shift();
    return this.storage;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.storage[0];
  }
}

// testing

const newBaseStorage = new BaseStorage(5);
console.log(newBaseStorage.push("Item 1"));
console.log(newBaseStorage.toArray());

const myStack = new Stack(8);
myStack.push("4");
myStack.push(4);
console.log(myStack.pop());
console.log(myStack.peek());

const myQueue = new Queue(5);
myQueue.push(1);
myQueue.push(2);
console.log(myQueue.shift());
console.log(myQueue.peek());

const stackFromIterable = Stack.fromIterable([10, 20, 30]);
console.log(stackFromIterable.toArray());

const queueFromIterable = Queue.fromIterable([10, 20, 30, 40]);
console.log(queueFromIterable.toArray());
