/*
  SinglyLinkedListNode {
      int data;
      SinglyLinkedListNode next;
  }
*/

type Head = null | {
  data: number;
  next: null | Head;
};

type InsertNodeAtTail = (head: Head, data: number) => Head;

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

// test
const listItems = [141, 302, 164, 530, 474];
let linkedList: Head = null;
for (let i = 0; i < listItems.length; i++) {
  const linkedListItem = insertNodeAtTail(linkedList, listItems[i]);
  linkedList = linkedListItem;
}
console.info(linkedList);

export {};
