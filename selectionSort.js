const array = [3, 40, 50, 2, 8, 0, 38, 1, 31]

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        // set current index as minimum
        let min = i;
        let temp = array[i];
        for(let j = i+1; j < arr.length; j++){
          if (array[j] < array[min]){
            min = j;
          }
        }
        array[i] = array[min];
        array[min] = temp;
      }
      return array;
}

console.log(selectionSort(array))