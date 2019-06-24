function twonum(nums, target) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        const arr = [j, i];
        return arr;
      }
    }
  }
}
