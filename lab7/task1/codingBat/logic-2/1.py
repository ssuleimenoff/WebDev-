def make_bricks(small, big, goal):
  max_big_inches = big * 5
  if goal > max_big_inches:
    remaining_goal = goal - max_big_inches
    return remaining_goal <= small
  else:
    return goal % 5 <= small