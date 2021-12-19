n = input()
n = int(n)
num = n
count = 0
while(1):
    num1 = num//10
    num2 = num % 10
    num3 = (num1+num2) % 10
    num = (num2 * 10) + num3
    count = count+1
    if(n == num):
        break
print(count)
