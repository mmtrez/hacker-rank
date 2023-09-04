// ** https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem?isFullScreen=true

type LLNode = {
  data: number;
  next: LLNode;
} | null;

type DeleteNode = (llist: LLNode, position: number) => LLNode;

const deleteNode: DeleteNode = (llist, position) => {
  let prev: LLNode = null;
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
