def palps(n):
    n = str(n)
    num = ''
    for i in n:
        num = i+num

    num = int(num)
    n = int(num)

    if n == num:
        return True
    return False



if __name__ == "__main__":
    n = int(input().strip())
    print(palps(n))