/*
  Complete the printLinkedList function below.
  For your reference:
  SinglyLinkedListNode {
      int data;
      SinglyLinkedListNode next;
  }
*/

type head = {
  data: number;
  next: head | null;
};

type PrintLinkedList = (val: head) => PrintLinkedList | void;

const printLinkedList: PrintLinkedList = (head) => {
  console.log(head.data);
  if (head.next) return printLinkedList(head.next);
};

printLinkedList({data: 2, next: {data: 4, next: null}});
