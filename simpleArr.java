import java.util.*;
public class simpleArr {
    public static void main(String[] args) {
        int[] myvalueArray = {3, 4, 5, 6, 7, 8, 9};
        System.out.println("The array is: " + Arrays.toString(myvalueArray));
        int[] myArr={1,2,3,4};
        for(int i=0; i<4; i++){
            System.out.println("element" + myArr[i]);

        }
        int[] myemptyArr = new int[10];
        myemptyArr[0] = 1;
        System.out.println("what" + Arrays.toString(myemptyArr));
    }
}
