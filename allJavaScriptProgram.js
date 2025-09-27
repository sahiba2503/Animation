console.log("javaScript program");

console.log("<br>program number 0");
var num =10;
console.log(num);

console.log("<br>program number 1");
//printing array
var myarr=[1,2,3,4,3,4,5];
console.log(myarr);

console.log("<br>program number 2");
//printing reverse array's elements
var ans = myarr.reverse();
console.log(ans);

console.log("<br>program number 3");
//find element's index in array
var marr= [1,2,3,4,5,3,4,5];
var indexValue = marr.indexOf(3);
console.log("value: " + indexValue);
 
console.log("<br>program number 4");
//find index of element from backwords direction
var arr= [1,2,3,4,5,3,4,5];
var lastIndexValue = arr.lastIndexOf(3);
console.log("last index value: " + lastIndexValue);

console.log("<br>program number 5");
//here we get element if exist in array
var array= [1,2,3,4,5,3,4,5];
var ansarray = array.includes(5);
console.log("ans array " + ansarray);

console.log("<br>program number 6");
//here we  will remove element from the last  possition of an array
var array1= [1,2,3,4,5,3,4,5];
var ansarray1 = array1.pop();
console.log("deleted element " + ansarray1);
console.log("array after deleting last element " + array1); 
console.log("<br>program number 6");

console.log("<br>program number 7");
//here we  will add element from the last  possition of an array
var array2= [1,2,3,4,5,3,4,5];
var ansarray2 = array2.push(6);
console.log("new length of array after adding element " + ansarray2);
console.log("array after adding last element " + array2);

console.log("<br>program number 8");
//here we  will remove element from the first  possition of an array
var array3= [1,2,3,4,5,3,4,5];
var ansarray3 = array3.shift();
console.log("deleted element " + ansarray3);
console.log("array after deleting first element " + array3);

console.log("<br>program number 9");
//here we  will add element from the first  possition of an array
var array4= [1,2,3,4,5,3,4,5];
var ansarray4 = array4.unshift(0);
console.log("new length of array after adding element " + ansarray4);
console.log("array after adding first element " + array4);

console.log("<br>program number 10");
//here we will join two arrays
var array5= [1,2,3,4,5];
var array6= [6,7,8,9,10];
var arrayansjoin = array5.concat(array6);
console.log("array after joining two arrays " + arrayansjoin);

console.log("<br>program number 11");
var array7= [1,2,3,4,5,6,7,8,9,10];
//here we are taking slice of an array
var arrayslice = array7.slice(3,7);
console.log("array after slicing " + arrayslice);

console.log("<br>program number 12");
//here we are splicing an array(here we are removing some elements and adding some elements)
var array8= [1,2,3,4,5,6,7,8,9,10];
var arraysplice = array8.splice(2,3,"a","b","c");
//2-starting index, 3-how many elements to remove,a-b-c- elements to add
console.log("array after splicing " + array8);

console.log("<br>program number 13");
var array9= [1,2,3,4,5,6,7,8,9,10];
var arraysplice = array9.splice(2,3,0,3,0,4);
//2-starting index, 3-how many elements to remove,a-b-c- elements to add
console.log("array after splicing " + array9);


 console.log("<br>program number 14");
 //here we are using join function for converting array into string
    var array10= [1,2,3,4,5,6,7,8,9,10];
    var arrayjoin =array10.join("-");
    console.log("array after joining " + arrayjoin);

     console.log("<br>program number 014");
 //here we are using join function for converting array into string
    var array11= [1,2,3,4,5,6,7,8,9,10];
    var arrayjoin =array11.join("");
    console.log("array after joining " + arrayjoin);
    console.log("is array:" + Array.isArray(arrayjoin));

    console.log("<br>program number 15");
    //here we are using some function for checking condition in array
    var array12= [1,2,3,4,5,6,7,8,9,10];
    var arraysome = array12.some(checkfun);
    console.log("array after some function " + arraysome);
    function checkfun(value){
        return value >5;
    }

    console.log("<br>program number 16");
    //here we are using every function for checking condition in array
    var array13= [1,2,3,4,5,6,7,8,9,10];
    var arrayevery = array13.every(checkfun1);
    console.log("array after every function " + arrayevery);
    function checkfun1(value){
        return value > 5;
    }

    console.log("<br>program number 17");
    //here we are using filter function for checking condition in array
    var array14= [1,2,3,4,5,6,7,8,9,10];
    var arrayfilter = array14.filter(checkfuntion);
    console.log("array after filter function " + arrayfilter);
    function checkfuntion(value){
        return value >5;
    }
    console.log("<br>program number 18");
    //here we are using map function for checking condition in array
    var array15= [1,2,3,4,5,6,7,8,9,10];
    var arraymap = array15.map(checkfuntion1);
    console.log("array after map function " + arraymap);
    function checkfuntion1(val){
        return val * 2;
    }
   console.log("<br>program number 19");
    // here we are using  filter function for printing elements with index.
    var array16= [1,2,3,4,5,6,7,8,9,10];
    var arrayfilter1 = array16.filter(checkfuntion2);
    console.log("array after filter function " + arrayfilter1);
    function checkfuntion2(value,index){
        console.log("index is " + index + " value is " + value);
    }

    console.log("<br>program number 20");
    //here we are using filter finction for finding duplicate elements in an array
    var array17= [1,2,3,4,5,3,4,5];
    var arrayfil = array17.filter(filterfinc);
    console.log("dublicate elements " + arrayfil +" : in array17");
    function filterfinc(value,index,array){
        return array.indexOf(value) !== index;
    }

console.log("<br>program number 21");
//here we are deleting duplicate elements from an array
var array18= [1,2,3,4,5,3,4,5];
var arraynodup = array18.filter((value,index)=>{
    
    return array18.indexOf(value) === index;
    //here we check which elements value's index and index are same and return those elements
});
console.log("array after removing dublicate elements " + arraynodup +" : in array18");
   
console.log("<br>program number 22");
// here we are using join function for converting array into string.
    var array19= ['a','b','c','d','e','f','g','h','i','j'];
    var arrayjoin1 =array19.join("");
    console.log("array after joining " + arrayjoin1);
    console.log("is array:" + Array.isArray(arrayjoin1));
  
    //here we are using string methods
    console.log("<br> program number 1");
    var str = "hello this is my string";
    console.log(str);
    console.log("length of string is: " + str.length);
     
    console.log("<br> program number 2");
    //here we are converting string into uppercase
    var str1 = "hello this is my string";
    var strupper = str1.toUpperCase();
    console.log("string in uppercase: " + strupper);
    console.log("original string: " + str1);
     
    console.log("<br> program number 3");
    //here we are converting string into lowercase
    var str2 = "HELLO THIS IS MY STRING";
    var strlower = str2.toLowerCase();
    console.log("string in lowercase: " + strlower);
    console.log("original string: " + str2);
     
    console.log("<br> program number 4");
    //here we are using slice function for slicing string
    var str3 = "hello this is my string";
    var strslice = str3.slice(3,10);
    console.log("string after slicing: " + strslice);
    console.log("original string: " + str3);

    console.log("<br> program number 5");
    //here we are using replace function for replacing string
    var str4 = "hello this is my string";
    var strreplace = str4.replace("hello","hi");
    console.log("string after replacing: " + strreplace);
    console.log("original string: " + str4);
     
       
    console.log("<br> program number 7");
    //here we are using startwith method
     var str6 = "this is my string line";
     var strans = str6.startsWith("this");
      var endstr = str6.endsWith("line");
      console.log("ans start with : " + strans);
      console.log("ans endswith : " + endstr );
       
       console.log("<br> program number 8");
        //here we are using trim();
        var str7 = " this is small line    ";
        var andstr7 = str7.trim();
        console.log(" remove outer space  : " + andstr7);
         
         console.log("<br> program number 8");
         // we are using charAt which return character of  any unique string index
         var str8 = "this is my small line";
         var str8ans = str8.charAt(3);
         console.log("character of index 3 : " + str8ans);
          
          console.log("<br> program number 9");
          //here we are using match function
          var str9 = "hellow how are you!";
          var str9ans = str9.match("how");
          if(str9ans == "how"){          
          console.log(" available sub string: " + str9ans);
          }
          else{
            console.log("not available");
          }

              console.log("<br> program number 10");
          //here we are using search function
          var str10 = "hellow sahiba how are you ! ";
          var str10ans = str10.search("nahib");
          console.log("match or not sahib in my string : " + str10ans);
          //if search method find sem sub string then return index otherwise it return -1.
          //-1 means not match 

           console.log("<br> program number 11");
          //here we are using split function
          var str11 = "hellow sahiba how are you ! ";
          var str11ans = str11.split(" ");
        //   var str11ans = str11.split("a");
          console.log("here my string is convert into array accordig to space element: " + str11ans);
          console.log(" original string check is array    : " + Array.isArray(str11));
          console.log("check is array : " + Array.isArray(str11ans));



      // here we going to use all methods one by one for number
        console.log("<br> program number 1");
        var num1 = "123.456789";
        //here we are using Number method
        console.log("type of num1 is : " + typeof(num1));
        var num1ans = Number(num1);
        console.log("type of num1ans is : " + typeof(num1ans));
         var mysmall = [1,2,3];
            console.log("type of mysmall is : " + Array.isArray(mysmall));

            console.log("<br> program number 2");
        //here we are using parseInt method it take only integer value and remove decimal value
        var num2 = "123.456789";
        var num2ans = parseInt(num2);
        console.log("num2ans is : " + num2ans);
        console.log("type of num2ans is : " + typeof(num2ans));

          
        console.log("<br> program number 3");
        //here we are using parseFloat method it take integer value with decimal value
        var num3 = "123.456789";
        var num3ans = parseFloat(num3);
        console.log("num3ans is : " + num3ans);
        console.log("type of num3ans is : " + typeof(num3ans));

        console.log("<br> program number 4");
        //here we are using toFixed method it take integer value with decimal value according to fixed value
        var num4 = 123.456789;
        var num4ans = num4.toFixed(2);
        console.log("num4ans is : " + num4ans);
        console.log("type of num4ans is : " + typeof(num4ans));

        console.log("<br> program number 5");
        //here we are using toPrecision method it take integer value with decimal value according to fixed value
        var num5 = 123.456789;
        var num5ans = num5.toPrecision(4);
        console.log("num5ans is : " + num5ans);
        console.log("type of num5ans is : " + typeof(num5ans));

        console.log("<br> program number 6");
        //here we are using toString method it convert number into string
        var num6 = 123.456789;
        console.log("type of num6 is : " + typeof(num6));
        //toString method convert number into string
        var num6ans = num6.toString();
        console.log("num6ans is : " + num6ans);
        console.log("type of num6ans is : " + typeof(num6ans));

        console.log("<br> program number 7");
        //here we are using isFinite method it check number is finite or not
        var num7 = 123.111111;
        var num7ans = isFinite(num7);
        console.log("num7ans is : " + num7ans);

      console.log("hello");
      console.log("world");
       console.log(" program number 7 <br>");
       var a = 10.33;
       var b = Number.isInteger(a);
       console.log("this number is integer or not :" + b);

       var a1 = 10;
       var b1 = Number.isInteger(a1);
       console.log("this number is integer or not :" + b1);

       //math methods
         console.log(" program number 1 <br>");
            var num8 = 4.611;
            var num8ans = Math.round(num8);
            console.log("num8ans is : " + num8ans);

            console.log(" program number 2 <br>");
            var num9 = 4.367;
            var num9ans = Math.ceil(num9);
            console.log("num9ans is : " + num9ans);
            // ceil method return next integer value
             
            console.log(" program number 3 <br>");
            var num10 = 4.767;
            var num10ans = Math.floor(num10);
            console.log("num10ans is : " + num10ans);
            // floor method return previous integer value or ignore decimal value

            console.log(" program number 4 <br>");

            var num11 = -4.767;
            console.log(" before using abs method num11 is : " + num11);
            var num11ans = Math.abs(num11);
            console.log("num11ans is : " + num11ans);
            // abs method return positive value of negative value

            console.log(" program number 5 <br>");
            var num12 = 4;
            var num12ans = Math.sqrt(num12);    
            console.log("num12ans is : " + num12ans);
            // sqrt method return square root of a number
  
console.log("program number 5.1 <br>");
            var num12a = 8;
            var num12aans = Math.cbrt(num12a);
            console.log("num12aans is : " + num12aans);
            // cbrt method return cube root of a number

            console.log(" program number 6 <br>");
            var num13 = 4;
            var num13ans = Math.pow(num13,3);
            console.log("num13ans is : " + num13ans);
            // pow method return value according to power

            console.log(" program number 7 <br>");
            var num14 = 4.811;
            var num14ans = Math.trunc(num14);
            console.log("num14ans is : " + num14ans);
            //trunc method ignore decimal value and return integer value it does not matter  decimal value is greater or smaller
             
            console.log(" program number 8 <br>");
             var num15ans = Math.min(0,-1,-2,-3,-4,-5,6,7,8,9,10,11,12,13,14,15);
            console.log("num15ans is : " + num15ans);
            //min method return smallest value from given values
 
            console.log(" program number 9 <br>");
             var num16ans = Math.max(0,-1,-2,-3,-4,-5,6,7,8,9,10,11,12,13,14,15);
            console.log("num16ans is : " + num16ans);
            //max method return greatest value from given values

            console.log(" program number 10 <br>");
            var num17ans = Math.random().toFixed(2)*10;
            // var num17ans = Math.random().toFixed(1)*10;
            console.log("num17ans is : " + num17ans);



