// import java.util.Scanner;
// public class myjava {
//     public static void main(String[] args) {
//         int[] arr = new int[]{10, 20, 30, 40, 50};
//         Scanner Sc = new Scanner(System.in);       
//         System.out.println("Enter a number");
//         int n = Sc.nextInt();
//         boolean flag =false;
//         for (int i=0; i<arr.length; i++){
//             if(arr[i] == n){
//                flag = true;
//                break;
//             }
//         }
//         if(flag){
//             System.out.println("Number found");
//         }else{
//             System.out.println("Number not found");
//         }
//         Sc.close();


//     }
// }
public class myjava {
    public static void main(String[] args) {
        int[] arr = new int[]{10, 20, 30, 40, 50};
        int n = 33; // Example number to search
        boolean flag = false;
        
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == n) {
                 System.out.println("Number found");
                 flag = true;
                 break;
               
            }
        }
        
        if (flag==false) {
            System.out.println("Number not found");
        } 
    }
}