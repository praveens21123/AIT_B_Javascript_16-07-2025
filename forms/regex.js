const sentance = "Welcome JS"
const pattern = /to/g

// Test & Match

// const result = pattern.test(sentance)
// console.log(result);

// const result = sentance.match(pattern)
// console.log(result);


/* 
Range - []
[a-z] => occurs only a to z (LowerCase)
[A-Z] => occurs only A to Z (UpperCase)
[^a-z] => Except a to z
[a-zA-Z] => Occurs both lower & Upper
[0-9] => from 0 to 9
[^0-9] => except 0 to 9

Quantifiers -
[]+ => 0 or 1 time
[]* => 1 or more time
[]? => 0 or more time
[]{n} => n Times
[]{n,} => min n times max anything
[]{n,m} => min n times max m times

modifiers
g - globally
i - caseInsensitive
m - multiline

\w - [a-zA-Z0-9_]
\W - [^a-zA-Z0-9_]
\d - [0-9]
\D - [^0-9]

Special Characters
\@, \s, \$*&%^\-^%*&
*/




