count = int(input())
num = list(map(int, input().split()))
max = max(num)
sum = 0
for i in num:
    sum = sum + i/max*100

avg = sum/count
print(avg)
