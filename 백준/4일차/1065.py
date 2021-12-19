# n 값 입력
n = int(input())
count = 0

# 1부터 n까지
for nums in range(1, n+1, 1):
    n_list = list(map(int, str(nums)))
    if nums < 100:
        count += 1
    elif n_list[0]-n_list[1] == n_list[1]-n_list[2]:
        count += 1

print(count)
