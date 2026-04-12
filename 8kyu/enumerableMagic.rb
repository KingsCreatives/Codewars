#Create a method reduce that accepts a list and a block, and returns an aggregate object for that list. See the tests for examples.
# If you need help, here's a reference:
# https://docs.ruby-lang.org/en/master/Enumerable.html#method-i-reduce
# Fundamentals ................in ruby

def reduce(list, &block)
  accumulator = list[0]
  list[1..].each { |item| accumulator = block.call(accumulator, item) }
  accumulator
end