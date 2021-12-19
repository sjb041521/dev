n = input()
s = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for i in s:
    n = n.replace(i, "&")

print(len(n))
