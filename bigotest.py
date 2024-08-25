

def happyFunction(lst, target):
    left = 0
    right = len(lst) - 1

    while left <= right:
        middle = (right - left) // 2 + left
        if target == lst[middle]:
            return middle
        elif target < lst[middle]:
            right = middle - 1
        else:
            left = middle + 1
    return -1



lst = [1,2,5,8,10,12,16,19,40,45,91]
target = 8
print(happyFunction(lst, 91))