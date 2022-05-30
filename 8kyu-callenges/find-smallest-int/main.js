// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function SmallestIntegerFinder(nums){
    let smallest = nums[0]
    nums.forEach(i => {
        if(i < smallest) smallest = i
    })
    return smallest
}
console.log(SmallestIntegerFinder([1, 1, -210, 76, -34]))
console.log(SmallestIntegerFinder([99, 23, 100, 20, 50]))
console.log(SmallestIntegerFinder([3, 90, -210, 76, -34]))
console.log(SmallestIntegerFinder([34, 15, 88, 2]))
console.log(SmallestIntegerFinder([34, -345, -1, 100]))