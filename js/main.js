
const firstRow = 'Мама мыла раму';
const secondRow = 'Собака друг человека';

let counter = 0;
let counterSecond = 0;

function getRow(firstRow, secondRow) {


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

   return
}
getRow(firstRow, secondRow);