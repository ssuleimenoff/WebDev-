def orr(a, b):
    return int(a ^ b)

a, b = map(bool, input().split())
print(orr(a,b))