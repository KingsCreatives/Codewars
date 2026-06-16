/**
 * Description:
Consider the following problem:

You have a system base-n
You want to be able to read outloud any number up to max
What is the strictly necessary words needed for you to be able to read it outloud?
Let start with an example:

We have a system base-10 and the max number we want to be able to read is 1000. So we will have 10 words for the digits. 0-9, and 3 words for the place value: decimals (10), hundredths (100) and thousandimal (100). Thats a total of 13 words.

Let's consider another example

n
=
5
,
m
a
x
=
3000
n=5,max=3000
So our system would need to 5 words for digits 0-4, and 4 words for the positional location: "fivesimals" (5), "twentyfivesimals" (25), 125-simals and 625-simals. A total of 9 words are needed. For example would write 2153 (decimal) in our base-5 system as 3213 and read somewhat like "three 625-simals, 2 125-simals, 1 25-simal, three". Supposing we have invented a single word for 25-simals, 125-simals, etc... like we have done for the decimal system.

Your task is: to write a words function which given a base-n system, and a max, is able to calculate how many words are needed for reading any number outloud up to the designated max.
Note: if max < base-n, the system would still need the words for every digit from 0 to n-1for proper understading of the system itself. So base-n is the minimum amount of words you'll ever need for any max

This kata was based on an exercise from Chapter I of a book called "What Is Mathematics?" from Herbert Robbins y Richard Courant. If you are stuck, considere giving it a read. Or the Wikipedia regards to Place Value
 */

function words(base_n, max) {
  let count = base_n;
  let power = base_n;

  while (power <= max) {
    count++;
    power *= base_n;
  }

  return count;
}