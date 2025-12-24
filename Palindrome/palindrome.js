console.log('testing palindrome')

function checkpalindrome(str){
    console.log(str)
    let splitstr = str .split("")
    console.log(splitstr)
    let reversestr = splitstr.reverse()
    console.log(reversestr)
    let newstr = reversestr.join("")
    console.log(newstr)
    if(str === newstr){
        console.log('it is a palindrome')

    }
    else{
        console.log('it is not a palindrome')
    }
}
checkpalindrome('Civic')