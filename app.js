// ? Task:Функция getLeaders принимает массив чисел, и возвращает массив Лидеров

// Пояснение: Число считается Лидером, если оно больше суммы всех элементов справа от него.

// Примечания:

// Входной массив содержит не менее 3 элементов
// Массив входных чисел может содержать как положительные, так и отрицательные числа
// Числа могут повторяться
// Массив который возвращается, должен содержать числа в том же порядке, в котором они встречаются в начальном массиве
// Отсутствие элементов справа от числа расценивается как 0
// Примеры:

// arrayLeaders([1, 2, 3, 4, 0]) === [4]

// 4 is greater than the sum all the elements to its right side
// The last element 0 is equal to right sum of its elements
// arrayLeaders([16, 17, 4, 3, 5, 2]) === [17, 5, 2]

// 17 is greater than the sum all the elements to its right side
// 5 is greater than the sum all the elements to its right side
// The last element 2 is greater than the sum of its right elements


// Solution 1


function getLeaders(numbers) {
    let resArray = []
    for (let i = 0; i < numbers.length; i++) {
        let sumElNumberRight = 0;
        for (let j = i + 1; j < numbers.length; j++) {
            sumElNumberRight += numbers[j];   
        }

        if (numbers[i] > sumElNumberRight) {
            resArray.push(numbers[i]);
        }
    }
    return resArray;
}



console.log(getLeaders([1, 2, 3, 4, 0]));
console.log(getLeaders([16, 17, 4, 3, 5, 2]));

// ! Explanation: used for if push 
