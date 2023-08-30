/*
  Complete the 'deleteNode' function below.
  The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
  The function accepts following parameters:
   1. INTEGER_SINGLY_LINKED_LIST llist
   2. INTEGER position

  For your reference:
  SinglyLinkedListNode {
      number data;
      SinglyLinkedListNode next;
  }
  
   https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem?isFullScreen=true
 */

type Head = null | {
  data: number;
  next: null | Head;
};

type DeleteNode = (llist: Head, position: number) => Head;

const deleteNode: DeleteNode = (llist, position) => {
  let prev: Head = null;
  let current = llist;
  current = llist;
  let i = 0;

  if (position === 0 && llist) return llist.next;

  while (i < position && current) {
    prev = current;
    current = current.next;
    i++;
  }

  if (prev && current) {
    current = current.next;
    prev.next = current;
  }

  return llist;
};

export {};
