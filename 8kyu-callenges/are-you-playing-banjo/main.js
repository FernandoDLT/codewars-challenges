// Are You Playing Banjo?
// JavaScript:
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}
// other solution:
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}
console.log(areYouPlayingBanjo('Fred'))
console.log(areYouPlayingBanjo('Ralph'))
console.log(areYouPlayingBanjo('Rita'))
console.log(areYouPlayingBanjo('Carl'))