
num1 = int(input())
num2 = int(input())
num3 = int(input())
mul = num1 * num2 * num3
result = str(mul)
for i in range(10):
    print(result.count(str(i)))
