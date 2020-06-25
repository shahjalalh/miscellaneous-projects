def profit2(stock_prices):

    # check length
    if len(stock_prices) < 2:
        raise Exception('Need at least two stock prices!')

    # start minimum price marker at first price
    min_stock_price = stock_prices[0]

    # start off with an initial max profit
    max_profit = stock_prices[1] - stock_prices[0]

    # skip first index of 0
    for price in stock_prices[1:]:

        # check the current price against our minimum for a profit
        # comparison agains the max_profit
        comparison_profit = price - min_stock_price

        # compare against our max_profit so far
        max_profit = max(max_profit, comparison_profit)

        # check to set the lowest stock price so far
        min_stock_price = min(min_stock_price, price)

    return max_profit


print(profit2([30, 22, 21, 5]))
print(profit2([10,12,14,12,13,11,8,7,6,13,23,45,11,10]))

