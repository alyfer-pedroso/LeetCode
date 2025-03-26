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
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let resultHead: typeof l1 = null;
    let current: typeof l1 = null;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0;

        const sum = val1 + val2 + carry;
        const newVal = sum % 10;

        carry = Math.floor(sum / 10);

        const newNode: ListNode = new ListNode(newVal);

        if (!resultHead) {
            resultHead = newNode;
        } else {
            current!.next = newNode;
        }

        current = newNode;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return resultHead;
};