// Friend or Foe?

// DESCRIPTION:
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise,
// you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends){
    return friends.filter(el => el.length === 4);
  }
  console.log(friend(['Mike','Fernando']))
  console.log(friend(['Joe','Karl','Fred']))
  console.log(friend(['Mike','Fernando','Pete']))
  console.log(friend(['Mike','Fernando','Lily', 'Tomm']))