a, b = input("").split()
a = int(a)
b = int(b)

if a > b:
    print(">")
elif b > a:
    print("<")
else:
    print("==")
