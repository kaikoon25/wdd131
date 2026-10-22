Array constructor:
const cars = new Array('string1', string2', 'etc');

Array literal:
const cars = ['string1', 'string2', number1, number2];
                0           1       2          3

console.log(cars[1]);
This shows string2 in the console

To add a new 5th value:
cars[4] = 'string3';
*OR*
cars.push('string3');
Which does not require spesifying the index location, puts it at the end

.forEach()
    Calls a function for every item in the array
    Example:
        fruit.forEach(myFunction)
        function myFunction(item) {
            console.log(item)
        }
    Will log every string and or number in the array 'item'

.map()
    Creates a new array from calling a function for every array element
    Example:
        const nums: [1, 2, 3, 4];
        const dbNums = nums.map(double)
        function double(num) {
            return num * 2;
        }
        console.log(dbNums);
    Returns the double of each number in the array 'nums'. [2, 4, 6, 8].

.filter()
    Creates a new array filled with items that pass a condition
    Example:
        const ages = [12, 33, 16, 40]
        const result = ages.filter(checkAdult);
        console.log(result);
        function checkAdult(age) {
            return age >= 18;
        }
        Makes a new array 'result' with values [33, 40], the ages from the original age array that are above or equal to 18.

.reduce()
    Returns a single value, the function accumulated result
    Example:
        const nums = [1, 2, 3, 4];
        const sum = nums.reduce(totalNums);
        function totalNums(total, item){
            return total + item;
        }
        const avgNum = sum/4;
        console.log(avgNum);
    Returns 2.5
    *Also:*
        const sum = nums.reduce(function(total, item){
            return total + item;
        });
        console.log(sum);
    Returns 10.
    *Also:*
        const sum = nums.reduce((total, item)=> total + item);
        console.log(sum);
    Returns 10.

In iteration array methods, the first parameter represents the current element (or value) being processed in the array
*I am a little confused by this*