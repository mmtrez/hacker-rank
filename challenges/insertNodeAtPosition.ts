/*
  Complete the 'insertNodeAtPosition' function below.
  The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
  The function accepts following parameters:
   1. INTEGER_SINGLY_LINKED_LIST llist
   2. INTEGER data
   3. INTEGER position

  For your reference:
  SinglyLinkedListNode {
    int data;
    SinglyLinkedListNode next;
  }

  https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?isFullScreen=true
*/

type Head = null | {
  data: number;
  next: null | Head;
};

type InsertNodeAtPosition = (llist: Head, data: number, position: number) => Head;

const createLinkedListNode = (data: number): Head => ({data: data, next: null});

const insertNodeAtPosition: InsertNodeAtPosition = (llist, data, position) => {
  const newNode = createLinkedListNode(data);
  let i = 0;
  let current: Head = llist;
  let prev: Head = null;

  while (i < position && current) {
    prev = current;
    i++;
    current = current.next;
  }

  if (newNode && prev) {
    newNode.next = current;
    prev.next = newNode;
  }

  return llist;
};

export {};
