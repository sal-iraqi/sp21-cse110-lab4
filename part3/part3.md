1. The bug is that num1 and num2 are type of strings when they are passed into the calculateSum function, and so result will get the concatenation of num1 and num2, which is why it doesn't show the sum of the inputted values but rather a concatenation of the inputted values.

2. To fix it, I would parse both num1 and num2 into integers and then add them, so that the operator + performs a mathematical addition with the integer values of num1 and num2. I just modified line 9 to fix this bug.

3. Name of the new json file is: citylots.json

4. Initiator file: part2.js

5. File size: 11.7 MB

6. Time to download: 8.37 s

7. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36

8. Apache

9. Last modified: Tue, 26 Jan 2021 22:14:13 GMT

10. Content type: application/json

11. Method: fetchData