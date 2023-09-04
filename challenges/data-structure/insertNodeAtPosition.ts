// ** https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?isFullScreen=true

type LLNode = {
  data: number;
  next: LLNode;
} | null;

type InsertNodeAtPosition = (llist: LLNode, data: number, position: number) => LLNode;

const createLinkedListNode = (data: number): LLNode => ({data: data, next: null});

const insertNodeAtPosition: InsertNodeAtPosition = (llist, data, position) => {
  const newNode = createLinkedListNode(data);
  let i = 0;
  let current: LLNode = llist;
  let prev: LLNode = null;

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
