window.onload = function () {
  const Exercise32 = () => {
    let people = [];
    let counter = 1;
    let add = true;
    while (add === true) {
      const name = prompt("Enter the user's name:").trim();
      const lastName = prompt("Enter the user's last name:").trim();
      const age = parseInt(this.prompt("Enter the user's age:").trim());

      if (age !== "" && !isNaN(age) && age > 0) {
        const person = {
          name: name,
          lastName: lastName,
          age: age
        };
        people.push(person);
      } else {
        alert("Invalid age. This person was not added.");
      }
      add = confirm("Do you want to add another user?");
    }

    console.log("People added:");
    console.log(people);
    
    if (people.length > 0) {
      console.log("age < 21 False / age >21 True.")
      const allUnder21 = people.every(p => p.age > 21);
      console.log(`All users under 21? ${allUnder21}`);
    }

    const evenAgeUsers = people.filter(p => p.age % 2 === 0);
    console.log('Users with even age:', evenAgeUsers);
    alert("This alert keeps the page from reloading automatically when the program ends..");
  }
  Exercise32();
}
