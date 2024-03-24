a = int(input())
a = str(a)
res = 0
deg = 0
for i in range(len(a) - 1, -1, -1):
    res += int(a[i]) * 2 ** deg
    deg += 1
print(res)