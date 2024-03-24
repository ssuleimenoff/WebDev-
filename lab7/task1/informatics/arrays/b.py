a = int(input())
l = list(map(int, input().split()))
for i in range(a):
    if l[i] % 2 == 0:
        print(l[i], end = " ")