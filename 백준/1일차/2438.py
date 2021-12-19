a = input("")
a = int(a)
for i in range(1, a+1):
    for j in range(1, i+1, 1):
        print("*", end='')
    print('')
