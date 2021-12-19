import re


def SimplePassword(strParam):
    test = strParam
    if len(strParam) <= 6 and len(strParam) < 31:
        return False
    elif re.search('[0-9]+', strParam) is None:
        return False
    elif re.search('[A-Z]+', strParam) is None:
        return False
    elif re.search('[`=~!@#$%^&*(),>./?_+|]+', strParam) is None:
        return False
    elif test.find("password") == 0:
        return False
    else:
        return True


# keep this function call here
print(SimplePassword(input()))
