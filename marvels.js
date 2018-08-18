// datatype - Array

const superHeros =['Iron Man', 'Spriderman','Captin America','thor']

console.log(superHeros);
console.log(superHeros[0]);
console.log(superHeros[superHeros.length - 1]);

console.log(`We have ${superHeros.length} super heros`);



const numbers = ['One', 'Two','Three','Four','Five','Six'];

numbers[1] = 'Something';

console.log(numbers);

Start

numbers.unshift('SOMETHING')
console.log(numbers);


end
console.log("The element to be deleted is" + numbers.pop());

console.log(numbers);

numbers.push('Seven')
console.log(numbers);



//middle
numbers.splice(2,1, 'Something')

console.log(numbers);


