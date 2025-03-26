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
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let resultHead: typeof list1 = null;
    let current: typeof list1 = null;

    while (list1 !== null || list2 !== null) {
        let newNode: ListNode;

        if (list1 === null) {
            newNode = new ListNode(list2!.val);
            list2 = list2.next;
        } else if (list2 === null) {
            newNode = new ListNode(list1!.val);
            list1 = list1.next;
        } else {
            newNode = new ListNode(list1.val <= list2.val ? list1.val : list2.val);
            if (list1.val <= list2.val) {
                list1 = list1.next;
            } else {
                list2 = list2.next;
            }
        }

        if (!resultHead) {
            resultHead = newNode;
        } else {
            current!.next = newNode;
        }

        current = newNode
    }

    return resultHead;
};