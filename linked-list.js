/* eslint-disable no-plusplus */
import Node from "./node.js";

const LinkedList = () => {
  // head of the list
  let headNode = null;
  // length of the list
  let length = 0;

  // methods

  // create a new node and append
  const append = (value) => {
    const newNode = Node(value);
    length++;

    // check if our head is empty now
    if (!headNode) {
      headNode = newNode;
      return;
    };

    let pointer = headNode;
    // find the last item in the list
    while (pointer.next) {
      pointer = pointer.next;
    };
    // set the next item to our new node
    pointer.next = newNode;
  };

  // add a new node to the start of the list
  const prepend = (value) => {
    const newNode = Node(value);
    length++;

    // check if our head is empty now
    if (!headNode) {
      headNode = newNode;
      return;
    };

    newNode.next = headNode;
    headNode = newNode;
  };

  // return the size of the list
  const size = () => {
    if (!headNode) {
      return null;
    };
    return length;
  };

  // return the head
  const head = () => {
    if (!headNode) {
      return null;
    };
    return headNode;
  };

  // return the last node
  const tail = () => {
    // check if our head is empty now
    if (!headNode) {
      return null;
    };

    let pointer = headNode;
    // find the last item in the list
    while (pointer.next) {
      pointer = pointer.next;
    };
    return pointer;
  };

  // find a node at a given index
  const at = (index) => {
    if (!headNode) {
      return null;
    };

    let pointer = headNode;
    for (let i = 0; i < index; i++) {
      if (!pointer.next) {
        return null;
      };
      pointer = pointer.next;
    };
    return pointer;
  };

  // remove a node
  const pop = () => {
    if (!headNode) {
      return null;
    };
    if (!headNode.next) {
      length--;
      headNode = null;
      return;
    }
    at(length - 2).next = null;
    length--;
  };

  // find if the list contains a value
  const contains = (value) => {
    if (!headNode) {
      return false;
    };

    let pointer = headNode;
    if (pointer.data === value) {
      return true;
    };
    while (pointer.next) {
      pointer = pointer.next;
      if (pointer.data === value) {
        return true;
      };
    };
    // if we make it this far and find no matches, return false
    return false;
  };

  const find = (value) => {
    if (!headNode) {
      return null;
    };

    let pointer = headNode;
    if (pointer.data === value) {
      return 0;
    };
    let i = 0;
    while (pointer.next) {
      pointer = pointer.next;
      i++;
      if (pointer.data === value) {
        return i;
      };
    };
    // if we make it this far and find no matches, return null
    return null;
  };

  const toString = () => {
    if (!headNode) {
      return ('list is empty');
    };
    let string = '';
    let pointer = headNode;
    string += `( ${pointer.data} )`;
    while (pointer.next) {
      pointer = pointer.next
      string += ` -> ( ${pointer.data} )`;
    };
    return string;
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString
  };

};

export default LinkedList;
