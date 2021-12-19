s = input().upper()
al = 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
sum = 0
sec = 2
for i in s:
    temp = al.index(i)
    if temp >= 0 and temp <= 2:
        sum += sec+1
    elif temp >= 3 and temp <= 5:
        sum += sec+2
    elif temp >= 6 and temp <= 8:
        sum += sec+3
    elif temp >= 9 and temp <= 11:
        sum += sec+4
    elif temp >= 12 and temp <= 14:
        sum += sec+5
    elif temp >= 15 and temp <= 18:
        sum += sec+6
    elif temp >= 19 and temp <= 21:
        sum += sec+7
    elif temp >= 22 and temp <= 25:
        sum += sec+8
print(sum)
