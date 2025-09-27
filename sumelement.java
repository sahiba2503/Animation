
import java.util.Scanner;
public class sumelement {
    public static void main(String[] args){
       
        //my array
        

        int sum = 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of array "); 
        int size = sc.nextInt();
        int[] arr = new int[size];

        System.out.println("Enter  " + size + " elements of the array one by one: ");
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        
        System.out.println("The sum of the elements in the array is: " + sum);
        sc.close();
    }
}
