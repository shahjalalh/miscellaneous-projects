def binary_search(arr, ele):

    # First and last index values
    first = 0
    last = len(arr) - 1

    found = False

    while first <= last and not found:

        mid = (first+last) / 2

        # Match found
        if arr[mid] == ele:
            found = True
        else:

            # set down
            if ele < arr[mid]:
                last = mid - 1
            # set up
            else:
                first = mid + 1

    return found

arr = [1,2,3,4,5,6,7,8,9,10]

# print(binary_search(arr, 20))

# recursive version of binary search
def rec_bin_search(arr, ele):

    # base case
    if len(arr) == 0:
        return False
    # recursive case
    else:
        mid = len(arr) / 2

        # if match found
        if arr[mid] == ele:
            return True
        else:
            # call again on second half
            if ele < arr[mid]:
                return rec_bin_search(arr[:mid], ele)
            # or call the first half
            else:
                return rec_bin_search(arr[mid+1:], ele)

print(rec_bin_search(arr, 15))