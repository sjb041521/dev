
count = 0
for i in range(5, 127):
    print(" {}의 2진수 에서 1의 갯수 : {}".format(i, bin(i).count('1')))
    if count < bin(i).count('1'):
        count = i
print("2진수 중 1이 가장 많은 값은 : {}".format(count))
