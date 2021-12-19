n = int(input())
avg = 0
for i in range(n):
    value = list(map(int, input().split()))
    avg = sum(value[1:])/value[0]
    cnt = 0
    for num in value[1:]:
        if num > avg:
            cnt += 1
    rate = cnt/value[0]*100
    print("{:.3f}%".format(rate))
