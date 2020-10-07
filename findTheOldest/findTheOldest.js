let findTheOldest = function(array) {
  let currentYear = new Date().getFullYear();
  array.sort((person1, person2) => {
    let person1age = (person1.yearOfDeath || currentYear) - person1.yearOfBirth;
    let person2age = (person2.yearOfDeath || currentYear) - person2.yearOfBirth;

    return person1age > person2age ? -1 : 1;
  });

  return array[0];
}

module.exports = findTheOldest
