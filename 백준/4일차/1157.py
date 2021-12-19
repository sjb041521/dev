s = input().upper()
list = list(set(s))
cnt = []

for i in list:
    num = s.count(i)
    cnt.append(num)

if cnt.count(max(cnt)) >= 2:
    print('?')
else:
    print(list[cnt.index(max(cnt))])
