a = int(input())
res = 1
while a > res:
    res *= 2
if(res == a):
    print("YES")
if(res > a):
        print("NO")