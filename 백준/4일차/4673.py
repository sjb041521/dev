nums = set(range(1, 10000))
remove = set()

for num in nums:
    for n in str(num):
        num += int(n)
    remove.add(num)

self_nums = nums-remove

for self_num in sorted(self_nums):
    print(self_num)
