a = int(input())
j = 0
l = list(map(int, input().split()))
for i in range(a):
    if l[i] > 0:
        j += 1
print(j)
