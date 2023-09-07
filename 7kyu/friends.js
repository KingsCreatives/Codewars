function friend(friends){
  //p : array of string
//   R : only names that the len is 4
//   E : ['Kofi', 'Kwame', 'Sass']  - > ['Kofi', 'Sass']
//   P : loop through arr & filter all ele with the eln f 4
  return friends.filter(ele => ele.length === 4)
}