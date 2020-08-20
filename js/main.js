// const firstRow = 'Мама мыла раму';
// const secondRow = 'Собака друг человека';

// function getRow(firstRow, secondRow) {
//    let counter = 0;
//    let counter2 = 0;

//    for (let i = 0; i <= firstRow; i++) {
//       if (firstRow.charAt(i) == "а") {
//          counter++;
//       }

//    }

//    for (let i = 0; i <= secondRow; i++) {
//       if (secondRow.charAt(i) == "а") {
//          counter2++;
//       }

//    }

//    if (counter > counter2) {
//       console.log(firstRow);
//    } else {
//       console.log(secondRow);
//    }
// }




// console.log(getRow(firstRow, secondRow));



const firstRow = 'Мама мыла раму';
const secondRow = 'Собака друг человека';

// const search = 'а';

// const indexSerch = firstRow.indexOf(search);
let counter = 0;
let counterSecond = 0;

function getRow() {


   for (let i = 0; i < firstRow.length; i++) {
      if (firstRow.charAt(i) === "а") {
         counter++
      }
   }
   for (let i = 0; i < secondRow.length; i++) {
      if (secondRow.charAt(i) === "а") {
         counterSecond++
      }
   }
   alert('firstRow больше так как она имеет больше букв "a": ' + counter + ' secondRow имеет всего лишь: ' + counterSecond);


   if (counter > counterSecond) {
      alert(firstRow)
   } else {
      alert(secondRow)
   }


}
getRow();