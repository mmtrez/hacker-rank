// ** https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem?isFullScreen=true

type LLNode = {
  data: number;
  next: LLNode;
} | null;

type PrintLinkedList = (head: LLNode) => PrintLinkedList | void;

const printLinkedList: PrintLinkedList = (head) => {
  console.log(head?.data);

  if (head?.next) return printLinkedList(head.next);
};
