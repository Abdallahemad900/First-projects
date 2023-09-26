// var is decliration 
// = 10 is assigmnt

// window.alert("hello")
// console.alert("hiii")
// 3l4an ttest alwebsite mn 8er ma al user y4ofoh  
// document.getElementById("demo").innerHTML="hello"



// data types
// var x=10 ;     //number
// var y='boudy'  // string
// var userName = "abdo"
// var z= true  //or false  boolean
//  var r; //undefined
//  null



// ex1
// var x =10;
// var y =10;
// var sum = x+y;
// window.alert(sum )


// ex2
// var x = Number(prompt("enter your number"))
// var y = Number(prompt("enter your number"))
// var sum = x+y;
// window.alert(sum )


// ex3
// var x = 10
// var y = 5 
// if(x==y){
// console.log("true")
// }
// else{
// console.log("false")



// practice

// var score = Number(prompt("enter your number"))
// if(score>=100){
//     console.log("syntax error")
// }
// else if(score>=90){
//     console.log("mmtaz")
// }
// else if(score>=70){
//     console.log("gyd gdn")
// }
// else if(score>=50){
//     console.log("gyd")
// }
// else if(score>=30)
// {
//     console.log("mkbool")
// }
//  else(score<=30)
//  {
//      console.log("saaagt")
//  }
// window.alert(score )




// for (var i=0 ; i<10 ; i+=2){
//     console.log("hello")
// }


// var userName = "boudy"
// userName += "emad"
// console.log(userName)




//  var cat = "";
//  for (var i=0 ; i<100 ; i++){
// cat += "<li>home</li>"
//  }
//  document.getElementById("myUL").innerHTML = cat;

// fe hna mo4kla





// var select =""
// for(var i=1950; i<2001; i++){
// select += "<option>"+ i +"</option>"
// }
// document.getElementById("select").innerHTML = select;




//////////////////////////////////////////////////////////

// console.log( " " * 1)
// var product = 1000

// var tax = 20

// var ads =10

// var sum = product +tax + ads






//  function getSum(x,y)
//  {
//      var sum =x+y
//      console.log(sum)
//  }
//  getSum(1000,100)



// (reuse)  klma mohma
//  function getSum(x,y)
//  {
//      var sum =x+y
//      return sum  
//  }
//  var x = getSum(1000 , 100)
//  console.log(x)






// alert(10+10)
//  function hello(){
//     var x =10+10
//     alert(x)
//  }
// hello();



// var x=20

// function welcome(){
//     var x =10
//     console.log(x)
// }
// welcome()
// x=30
// console.log(x)







// (
// function hello(){
//     alert("hello")
// }
// )();  
// self invoked btndh 3la nfsha 





// function hello(){
//     alert("hello")
// }

//////////////////////////////////////




// objects

// var product = {
//     price:2000,
//     pName: "iphone",
//     sale: true
// }
// console.log(product.price)







// var userName ={
//     fName:"mohamed",
//     age:29,
//     phone: "011666916",
//     wife:{firstName:"mai" , age:25 , son:{fname:"ahmed"} } ,
   
//     note:function(){
//         alert("hola")
//     }
// }
// userName.note()

///////
// console.log(userName.wife.son.fname)






// index  0         1      2    3   length -1
// var arr=[ "abdo" , "mai" , 200 , "lol", "boudy"]

// console.log(arr[0]) 

// bdl matktb felnos i<5 aktb i<arr.length  
// al i<4 htktb l7d 
// for(var i=0 ; i < arr.length; i++){
//     console.log(arr[i])
// }






// json is object in array
// var names =[userone={fName:"boudy",age:25} , "ahmed" , 
// user3 = {fName:"kaio" , age:17}
// ]

// console.log(names[0].age)









// var friends =
// ["abdo","yehya","mohamed","boudy","ahmed" ]
// for( var i=0 ; i<friends.length ; i++){
//     console.log(friends[i])
// }








// var friends =
// ["abdo","yehya","mohamed","boudy","ahmed" ]


// friends.pop()
// friends.shift()
// friends.splice(0,2)
// friends.splice(3,2)
// console.log(friends)







// var friends =
// ["abdo","yehya","mohamed","boudy","ahmed" ]

// var newfriend = prompt("enter your name")
// friends.push(newfriend)

// console.log(friends)
// type of
// indexoff in Dom
// friends.sort()
// friends.reverse()
// friends.slice()
// friends.filter()







//////////////////////////////////

// all of this appear in console
// string
// var productName = document.getElementById("productName")
// var productCat = document.getElementById("productCat")
// var productDes = document.getElementById("productDes")
// array
// var productContainer =[]

// function addProduct(){
    // object
// var product ={
//     name:productName.value ,
//     cat: productCat.value,
//     des:productDes.value
//     }
//     productContainer.push(product)
//     console.log(productContainer)
// }


// function displayProduct (){
// var productData =""
// for(var i=0 ; i<productContainer.length ; i++){
    
//     `
//     productData+=
//     <tr>
//     <td>test</td>
//     <td>test</td>
//     <td>test</td>
// </tr>
// `

// }

// }






// var productName = document.getElementById("productName")
// var productPrice = document.getElementById("productPrice")
// var productCategory = document.getElementById("productCategory")
// var productDescription = document.getElementById("productDescription")
// var productContainer = []

// function addProduct() {
//     var product = {
//         name: productName.value,
//         price: productPrice.value,
//         category: productCategory.value,
//         Description: productDescription.value
//     }
//     productContainer.push(product)
//     console.log(productContainer)
//     displayProduct()
// }


// function displayProduct() {
//     var productData = ""
//     for (var i = 0; i < productContainer.length; i++) {
//         productData +=
//             `
//         <tr>
//         <td>${productContainer[i].name}</td>
//         <td>${productContainer[i].price}</td>
//         <td>${productContainer[i].category}</td>
//         <td>${productContainer[i].Description}</td>
//      </tr> 
//       `
//     }
//     document.getElementById("tableData").innerHTML = productData
// }















