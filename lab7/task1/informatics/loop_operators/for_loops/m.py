a = int(input())

cnt = 0
for i in range(a):
    if int(input()) == 0:
        cnt += 1
print(cnt)