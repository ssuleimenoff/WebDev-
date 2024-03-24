a = int(input())
j = 0
l = list(map(int, input().split()))
for i in range(1,a):
    if l[i] > l[i - 1]:
        j += 1
print(j)