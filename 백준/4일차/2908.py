n = list(map(str, input().split()))
string = list()
for i in n:
    string += i[::-1].split()
print(max(string))
