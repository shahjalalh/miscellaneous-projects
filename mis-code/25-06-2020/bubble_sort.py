def bubble_sort(A):
    count = 0
    n = len(A)
    swapped = True

    while swapped:
        swapped = False
        count = count + 1
        for i in range(1, n):
            if i < n-1:
                if A[i] > A[i+1]:
                    A[i], A[i+1] = A[i+1], A[i]
                    swapped = True
    
    return count

# 5
# 1 3 2 5 4

N = int(input())
A = [int(x) for x in input().split()]
A = A[:N]

print(bubble_sort(A))

