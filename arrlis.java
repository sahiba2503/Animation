import java.util.*;

class arrlis {
    public static void main(String[] args)
{
   
    // ArrayList<String> list = new ArrayList<String>();
    ArrayList<Integer> List = new ArrayList<Integer>();
    
    //add elements to the list
    List.add(1);
    List.add(2);
    List.add(3);
    List.add(4);
    System.out.println(List);
    //get element at index 0
     int element= List.get(0);
     System.out.println("Element at index 0: " + element);
     //add element in between .
     List.add(2,7);
        System.out.println("Element at index 2: " + List);
        //remove element at index 1
        List.remove(3);
        System.out.println("List after removing element at index 1: " + List);
        //check if the list contains element 3
        int size=List.size();
        System.out.println("Size of the list: " + size);
        //check if the list is empty
        System.out.println("printing elements of the list one by one:");
        for(int i=0; i<size; i++){
            if(List.isEmpty()){
                System.out.println("List is empty");
                break;
            }
            System.out.println(List.get(i));

        }
        Collections.sort(List);
        System.out.println("List after sorting in ascending order: " + List);
        Collections.reverse(List);
        System.out.println("List after reversing: " + List);
        //clear the list
        
        System.out.println("List after clearing: " + List);
        //check if the list is empty
        System.out.println("List is empty: " + List.isEmpty());
        //check if the list contains element 3
        System.out.println("List contains element 3: " + List.contains(3));
         System.out.println("List contains element 4: " + List.contains(4));
         List.set(2,9);//first parameter defined index where we want to set new value.
         System.out.println(List);
         int ind=List.indexOf(9);
         System.out.println(" in which position 9 value is present." + ind);
         List.clear();
    


    
}
}
//we can use
//add(),addAll(),get(),indexOf(),lastIndexOf(),
//remove(),removeall(),set(),isEmpty(),size(),clear()
