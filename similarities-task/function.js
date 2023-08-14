class Person {
  constructor(name, age, height, weight, music, hobbies, religion, occupation, likes, dislikes, status) {
    this.name = name
    this.age = age
    this.height = height
    this.weight = weight
    this.music = music
    this.hobbies = hobbies
    this.religion = religion
    this.occupation = occupation
    this.likes = likes
    this.dislikes = dislikes
    this.status = status
  }
}

function findSimilarities(person1, person2) {
    const similarities = []

  if (person1.age === person2.age) {
    similarities.push("Age")
  }

  if (person1.height === person2.height) {
    similarities.push("Height")
  }

  if (person1.weight === person2.weight) {
    similarities.push("Weight")
  }

  if (person1.music === person2.music) {
    similarities.push("Music Preference")
  }

  if (person1.religion === person2.religion) {
    similarities.push("Religion")
  }

  if (person1.occupation === person2.religion) {
    similarities.push("Occupation")
  }

  if (person1.status === person2.status) {
    similarities.push("Marital Status")
  }

  const commonHobbies = person1.hobbies.filter(hobby => person2.hobbies.includes(hobby));
  if (commonHobbies.length > 0) {
    similarities.push("Hobbies");
  }

  const commonLikes = person1.likes.filter(likes => person2.likes.includes(likes))
  if (commonLikes.length > 0) {
    similarities.push("Likes")
  }

  const commonDislikes = person1.dislikes.filter(dislikes => person2.dislikes.includes(dislikes))
  if (commonDislikes.length > 0) {
    similarities.push("Dislikes")
  }

  return similarities;
}
// Creating instances of the Person class
const person1 = new Person('David King', 27, 6.3, '90kg', 'Afro-Pop', ["gym", "mma", "engineering", "fashion"], 'Christianity', 'Engineer', ["motorcycles", "cars", "perfumes", "gold"], ["dishonesty", "laxity", "stress"], 'dating');
const person2 = new Person('Toluwalope Oni', 26, 5.11, '60kg', 'RnB', ['engineering', 'football', 'volleyball', 'running'], 'Christianity', 'Software Developer', ['computers', 'phones', "graphics", "sleeping"], ["dishonesty", "greed", "rage"], 'dating');

const similarities = findSimilarities(person1, person2);
console.log(`Similarities found: ${similarities.join(', ')}`);
