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

const createLinkedListNode = (data: number): Head => ({data: data, next: null});

function insertNodeAtHead(head: Head, data: number) {
  const newNode = createLinkedListNode(data);
  if (!head) {
    head = newNode;
    return head;
  }
  if (newNode) newNode.next = head;
  return newNode;
}

// test
const listItems = [141, 302, 164, 530, 474];
let linkedList: Head = null;
for (let i = 0; i < listItems.length; i++) {
  const linkedListItem = insertNodeAtHead(linkedList, listItems[i]);
  linkedList = linkedListItem;
}
console.log(JSON.stringify(linkedList));

export {};
