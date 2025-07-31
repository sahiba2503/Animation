import java.util.*;
 class collfram {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<String>();
        list.addFirst("is");
         list.addFirst("This");
         System.out.println("List after adding elements at the beginning:");
        System.out.println(list);
        list.addLast("a");
        System.out.println("List after adding an element at the end:");
        System.out.println(list);
        list.addLast("list");
        System.out.println("List after adding another element at the end:");
        System.out.println(list);
        list.removeFirst();
        System.out.println("List after removing the first element:");
        System.out.println(list);
        list.removeLast();
        System.out.println("List after removing the last element:");
        System.out.println(list);
        list.clear();
        System.out.println("List after clearing all elements:");
        System.out.println(list);
        System.out.println("List is empty: " + list.isEmpty());


       
      
    }
    
}
