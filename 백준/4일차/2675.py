n = int(input())

for num in range(n):
    n1 = list(map(str, input()))
    p = n1[:n1.index(' ')]
    s = list(map(int, p))
    for i in n1[2:]:
        print(i*s[0], end='')
    print()
