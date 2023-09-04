// ** https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem?isFullScreen=true

type LLNode = {
  data: number;
  next: LLNode;
} | null;

type ReversePrint = (head: LLNode) => void;

const reversePrint: ReversePrint = (llist: LLNode) => {
  let nodeArray: LLNode[] = [];
  let current = llist;

  while (current) {
    nodeArray.push(current);
    current = current.next;
  }

  nodeArray.reverse().forEach((node) => console.log(node?.data));
};
