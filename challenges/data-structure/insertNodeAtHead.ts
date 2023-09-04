// ** https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list/problem?isFullScreen=true

type LLNode = {
  data: number;
  next: LLNode;
} | null;

type InsertNodeAtHead = (head: LLNode, data: number) => LLNode;

const createLinkedListNode = (data: number): LLNode => ({data: data, next: null});

const insertNodeAtHead: InsertNodeAtHead = (head, data) => {
  const newNode = createLinkedListNode(data);

  if (!head) {
    head = newNode;
    return head;
  }

  if (newNode) newNode.next = head;

  return newNode;
};
