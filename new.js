var variableName = 2.3
var name = "Nitesh"
// const discount=5

// console.log("discount is: ",discount);
// discount=6
// console.log("discount is: ",discount);
// console.log(variableName)
// console.log("Hiii my name is name")
// console.log(`Hiii my name is ${name}`)

// console.log(typeof(variableName));



var first_name = "Neetesh"

// this method is used to return the char value of the specified index in the string
var charValue = first_name.charAt(3)

// console.log(charValue);

// var last_name="Tiwari"
// var space=" "
// first_name=first_name.concat(space)
// var name=first_name.concat(last_name)

// console.log("name: ",name);

// var result=last_name.endsWith('k')
// result=last_name.startsWith('T')
// console.log(result);


// result=last_name.includes('asdasd')
// console.log(result);

// var indexValue=last_name.indexOf('i')
// console.log(indexValue);

// var greet="Good Morning"
// var result=greet.replace("Good","Bad")
// console.log(result);
// result=greet.repeat(4)
// console.log(result);

// result=greet.slice(0,4)
// console.log(result);



// reverse of string



// var reversedVaue=''
// for(let i=value.length-1;i>=0;i--)
// {
//     reversedVaue=reversedVaue+value[i]
// }

// console.log("Reversed String : ",reversedVaue);

var value = "abcdefghijklmnopqrstuvwxyz"

var spcial_char = "j"
var final_string = ''
for (let i = 0; i <= value.length - 1; i++) {
    if (value[i] != spcial_char) {
        final_string = final_string + value[i]
    }
}

console.log("Final String : ", final_string);



var data = "Hii i  am a developer "
//  data : Hiiiamadeveloper

var space = " "
var withoutSpace = ''
for (let i = 0; i <= data.length - 1; i++) {
    if (data[i] != space) {
        withoutSpace = withoutSpace + data[i]
    }
}

console.log("Final String : ", withoutSpace);


//  write a program to check given string is palindrome or not

var str = "Madam"

str = str.toLowerCase()




function checkPalindrome() {
    var reverseString = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i]
    }


    if (str == reverseString) {
        console.log("Given string is palindrome.");
    }
    else {
        console.log("Given string is not Palindrome.");

    }
}

// checkPalindrome()

function checkPalindromeAnotherWay()
{
    let i = 0;
    let j = str.length-1;
    
    while(i<=j){
        if(str[i] != str[j]){
            console.log("This is not Palindrome");
            break;
        }
        else{
            console.log("This is Palindrome");
            break
        }
        i++;
        j--;
    }
    
}

checkPalindromeAnotherWay()












