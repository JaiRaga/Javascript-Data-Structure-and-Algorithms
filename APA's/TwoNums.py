def twonums(lis, target):
    v = 0
    arr = []
    for i in lis:
        v = target - i
        if lis.count(v) > 0:
            arr.append(lis.index(i))
            arr.append(lis.index(v))
            return arr




if __name__ == "__main__":
    arr = list(map(int, input().strip().split(' ')))
    t = int(input().strip()) 
    print(twonums(arr, t))