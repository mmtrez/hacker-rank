// ** https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem?isFullScreen=true

type LLNode = {
  data: number;
  next: LLNode;
} | null;

type InsertNodeAtTail = (head: LLNode, data: number) => LLNode;

const createLinkedListNode = (data: number) => ({data: data, next: null});

const insertNodeAtTail: InsertNodeAtTail = (head, data) => {
  const newNode = createLinkedListNode(data);
  // if head is empty and this is the first node
  if (!head) {
    head = newNode;
    return head;
  }
  // if head is not empty find the last node
  let current = head;
  while (current?.next) {
    current = current.next;
  }
  // add data at tail
  current.next = newNode;

  return head;
};
