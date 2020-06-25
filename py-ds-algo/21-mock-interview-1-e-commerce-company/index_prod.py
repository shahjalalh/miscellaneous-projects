def index_prod(lst):

    # create an empty output list
    output = [None] * len(lst)

    # set initial product and index for greedy run forward
    product = 1
    i = 0

    while i < len(lst):
        # set index as cumulative product
        output[i] = product

        # cumulative product
        product *= lst[i]

        # move forward
        i += 1

    # now for our greedy run backwards
    product = 1

    # start index at last (taking into account index 0)
    i = len(lst) - 1

    # until the beginning of the list
    while i >= 0:
        # same operations as before, just backwards
        output[i] *= product
        product *= lst[i]
        i -= 1

    print(output)

    return output

index_prod([1, 2, 3, 4])