// 在leetcode验证啦：https://leetcode-cn.com/problems/reverse-linked-list/

var reverseList = function (head){
    if(!head || !head.next){
        return head
    }
    const ret = reverseList(head.next)
    head.next.next = head
    head.next = null
    return ret
}