def count_evens(nums):
  x = 0
  for i in nums:
    if i % 2 == 0:
      x += 1
  return x