const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  head: null,
  length: 0,
  getLength() {
    return this.length;
  },
  
  addLink(value) {
    if (arguments.length == 0) value = "";
    if (this.length == 0) {
      this.head = {val: String(value), next: null}
      console.log(this.head);
    } else {
      let h = this.head;
      while (h.next) {
        h = h.next;
      }
      h.next = {val: String(value), next: null}
    }
    this.length++;
    return this;
  },

  removeLink(position) {
    if (
      position < 1 ||
      position > this.length ||
      isNaN(position) ||
      Math.round(position) != position
    ) {
        let j = this.length;
        for (let i = 0; i < j; i++) {
          this.removeLink(1);
        }
        throw new Error("You can't remove incorrect link!");
    }
      
    let h = this.head;
    let counter = 1;
    if (position == 1) {
      this.head = h.next;
      this.length--;
      return this;
    }
    while (counter != position - 1) {
      h = h.next;
      counter++;
    }
    if (position != this.length) {
      h.next = h.next.next;
    } else {
      h.next = null;
    }
    this.length--;
    return this;
  },
  
  reverseChain() {
    let k = this.getLength() - 1;
    while (k > 0) {
      let count = 1;
      let cur = this.head;
      while (count < k) {
        cur = cur.next;
        count++;
      }
      this.addLink(cur.val);
      this.removeLink(count);
      k--;
    }
    return this;
  },

  finishChain() {
    let print = `( ${this.head.val} )`;
    let cur = this.head.next;
    while (cur) {
      print += `~~( ${cur.val} )`;
      cur = cur.next;
    }
    let j = this.length;
    for (let i = 0; i < j; i++) {
        this.removeLink(1);
    }
    return print;
  },
};

module.exports = {
  chainMaker
};
