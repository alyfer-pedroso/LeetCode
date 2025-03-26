/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;

  let current: ListNode | null = head;
  while (current !== null) {
    let runner: ListNode | null = current;
    while (runner?.next !== null) {
      if (runner?.next.val === current.val) {
        runner.next = runner.next.next;
        continue;
      }
      runner = runner.next;
    }
    current = current.next;
  }
  
  return head;
}