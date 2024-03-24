def make_chocolate(small, big, goal):
    big_needed = min(big, goal // 5)
    small_needed = goal - big_needed * 5
    if small_needed <= small:
        return small_needed
    else:
        return -1