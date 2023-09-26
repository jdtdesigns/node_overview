var otherData = {

}

otherData.name;

var data = {
  name: 'JD',
  age: 43,
  // printName: () => {
  //   console.log(this); global
  // }
  printNameStandard: function () {
    console.log(this.name);
  }
};

data.printName();





// var coolArrow = (userName, age) => console.log(userName, age);
// var add = (a, b) => a + b;

// coolArrow('JD', 43);

// var sum = add(3, 7);

// console.log(sum);


// var anotherFunc = function () {

// }

// function printName(userName) {
//   var capitalize = str => str[0].toUpperCase() + str.slice(1);

//   var capitalizeOld = function(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }

//   console.log(capitalize(userName));
// }

// printName('jane');



// function someFunc() {
//   console.log('some func');
// }

// someFunc();


// anotherFunc();

