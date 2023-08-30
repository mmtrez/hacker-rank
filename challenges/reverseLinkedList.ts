/*
  Complete the 'reverse' function below.
  The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
  The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
  For your reference:
  SinglyLinkedListNode {
    number data;
    SinglyLinkedListNode next;
  }
*/

type Head = null | {
  data: number;
  next: null | Head;
};

type Reverse = (head: Head) => Head;

const reverse: Reverse = (llist) => {
  let nodeArray: Head[] = [];
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

export {};
