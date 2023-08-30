/*
  Complete the 'reversePrint' function below.
  The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
  For your reference:
 
  SinglyLinkedListNode {
      int data;
      SinglyLinkedListNode next;
  }

  https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem?isFullScreen=true
*/

type Head = null | {
  data: number;
  next: null | Head;
};

type ReversePrint = (head: Head) => void;

const reversePrint: ReversePrint = (llist: Head) => {
  let nodeArray: Head[] = [];
  let current = llist;

  while (current) {
    nodeArray.push(current);
    current = current.next;
  }

  nodeArray.reverse().forEach((node) => console.log(node?.data));
};

export {};
