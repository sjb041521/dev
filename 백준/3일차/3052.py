num = []
count = 0
for i in range(1, 11):
    num.append(int(input()) % 42)

num = set(num)
count = list(num)
print(len(num))
