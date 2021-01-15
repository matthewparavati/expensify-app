const person = {
  name: 'Matthew',
  age: 29,
  location: {
    city: 'Atlanta',
    temp: 35,
  },
};

const { name, age } = person;

console.log(`${name} is ${age}`);

const { temp, city } = person.location;
console.log(`It's ${temp} in ${city}`);
