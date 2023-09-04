// ** https://www.hackerrank.com/challenges/reverse-a-linked-list/problem?isFullScreen=true

type LLNode = {
  data: number;
  next: LLNode;
} | null;

type Reverse = (head: LLNode) => LLNode;

const reverse: Reverse = (llist) => {
  let nodeArray: LLNode[] = [];
  let current = llist;

  while (current) {
    nodeArray.push(current);
    current = current.next;
  }

  const reversedArr = nodeArray.reverse();
  for (let i = 0; i < reversedArr.length; i++) {
    reversedArr[i].next = reversedArr[i + 1] || null;
  }
  return reversedArr[0];
};
