a, b = input("").split()
a = int(a)
b = int(b)
c = 45

if b > c:
    b = b-c

elif c > b:
    if a == 0:
        a = 24
        a = a-1
        b = 60-(c-b)
    else:
        a = a-1
        b = 60-(c-b)
else:
    b = 0
print(a, b)
