def min(l):
    min = l[0]
    for i in range(len(l)):
        if l[i] < min:
            min = l[i]
    return min
print(min(list(map(int, input().split()))))