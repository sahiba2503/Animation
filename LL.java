

   
//here we implent a singly linked list with methods to add and delete nodes at the beginning and end of the list
//and use scratch to implement the linked list .
 class LL {
Node head;
class Node{
    String data;
    Node next;
     
     Node (String data){
        this.data=data;
        this.next=null;       
     }
}
public void addFirst(String data){
    Node newNode= new Node(data);
    if(head == null){
        head = newNode;
        return;
    }
    newNode.next=head;
    head= newNode;
}

public void addLast(String data){
    Node newNode= new Node(data);
    if(head == null){
        head = newNode;
        return;
    }
   Node currNode= head;
   while (currNode.next != null) {
       currNode = currNode.next;
   }
   currNode.next = newNode;
}
public void printList(){
        if(head == null){
        System.out.print("list is empty");
        return;
    }
    Node currNode = head;
    while(currNode != null){
        System.out.print(currNode.data + " -> ");
        currNode=currNode.next;
    }
    System.out.println("Null");
}



public void deleteFirst() {
    if (head == null) {
        System.out.println("List is empty, nothing to delete.");
        return;
    }
    head = head.next;
}
public void deleteLast() {
    if (head == null) {
        System.out.println("List is empty, nothing to delete.");
        return;
    }
    if (head.next == null) {
        head = null;
        return;
    }
    Node currNode = head;
    while (currNode.next.next != null) {
        currNode = currNode.next;
    }
    currNode.next = null;
 }


public static void main(String[] args) {

    LL list = new LL();
    list.addFirst("is");
    list.addFirst("This");
    list.printList();
    list.addLast("a");
    list.printList();
    list.deleteFirst();
    list.printList();
    list.deleteLast();
    list.printList();


}
 }
