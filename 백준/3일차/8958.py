n = int(input())
for i in range(n):
    nums = list(input())
    sum = 0
    c = 1
    for num in nums:
        if num == 'O':
            sum += c
            c += 1
        else:
            c = 1
    print(sum)
