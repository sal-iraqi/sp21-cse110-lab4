### Part 1a

1. values added: 20
2. values added: 20
3. values added: 20
4. Line 13 returns an error because the program cannot see what **result** is since it is in a different code block.
5. The code returns an error because the program is reassigning the value of **result** but it is a constant variable so its value cannot be reassigned.
6. The code returns an error because of line 7, for the same reason as question 5. Even if there was no reassignment of of the variable in line 7, the program will still return an error because **result** is not defined in the same code block as line 13, so the program will think **result** is not defined when executing line 13.

### Part 1b

1. Line 12 will print 3 because once the for-loop finishes (when **i** becomes 3 since that is the length of the prices array), then line 12 will execute. Because **i** was declared with the keyword **var**, line 12 will see the last value of **i** from the for-loop, which is 3.

2. Line 13 will print 150. Because **discountedPrice** was declared with the keyword **var** and within the same function as line 13, the program will take the value of **discountedPrice** that was assigned at the last iteration of the for-loop, which is 300*0.5 = 150.

3. Line 14 will print 150, following the same reasoning as question 2.Because **finalPrice** was declared with the keyword **var** and within the same function as line 14, the program will take the value of **finalPrice** that was assigned at the last iteration of the for-loop, which is (150*100)/100 = 150.

4. This function will return the new prices after the discount has been applied to the passed prices. In the case of the program, when line 19 executes, the function will return the array [50,100,150] with the passed prices and discount.

5. The code will cause an error because **i** is declared with the keyword **let** in the for-loop, so it will only be visible within the code block of the for-loop, and since line 12 is outside the code block of the for-loop, the program thinks **i** is not defined.

6. Code will cause an error for the same reason as question 5. The program thinks **discountedPrice** is not defined since it was only defined within the code block of the for-loop, which is not visible ot line 13.

7. Line 14 will print 150. **finalPrice** is declared and defined within the code block of the function, so it is visible to the for-loop and line 14 since they are within the same code block. **finalPrice** will take on value assigned to it at the last iteration of the for-loop, which is 150.

8. This function will return the new prices after the discount has been applied to the passed prices. All of the variables are well defined since no variable is used that is not defined within the same code block. Therefore, their values will change as expected. In the case of the program, when line 19 executes, the function will return the array [50,100,150] with the passed prices and discount.

9. The code will cause an error because **i** is declared with the keyword **let** in the for-loop, so it will only be visible within the code block of the for-loop, and since line 11 is outside the code block of the for-loop, the program thinks **i** is not defined.

10. Line 12 will print 3 because **length** is defined in the same code block as line 12 and it was never reassigned to another value.

11. The function will return the new prices after the discount has been applied to the passed prices. All of the variables are well defined since no variable is used that is not defined within the same code block and the constant variables are not reassigned. In the for-loop, the program is declaring a new constant variable with each iteration, so it will not be considered as reassigning value, but rather declaring and initializing a new variable. In the case of the program, when line 19 executes, the function will return the array [50,100,150] with the passed prices and discount.

12. Answers:
<ol type="A">
  <li>student.name</li>
  <li>student['Grad Year']</li>
  <li>student.greeting()</li>
  <li>student['Favorite Teacher'].name</li>
  <li>student.courseLoad[0]</li>
</ol>

13. Answers:
<ol type="A">
  <li>'32', because integers map to their exact string representation when exact string is an operand of the + operator (string concatenation).</li>
  <li>1, because an exact string is passed as an operand in a numeric expression involving the operator -, which maps the exact string to its integer representation.</li>
  <li>3, because null is not a string, so the operator + will perform a mathematical addition by mapping true to its integer representation.</li>
  <li>'3null', because an exact string is an operand of the operator +, so null will be mapped to its string representation and perform a string concatenation.</li>
  <li>4, because the operator + performs a mathematical addition since no operand is a string, and so true will be mapped to its integer representation, 1, and gets added with 3.</li>
  <li>0, because the operator + performs a mathematical addition since no operand is a string, and false and null will be mapped to their integer representations, which are 0.</li>
  <li>'3undefined', undefined will be mapped to its exact string representation and gets concatenated with '3'.</li>
  <li>NaN, because the oeprator - performs a mathematical subtraction, but undefined has no integer representation so it returns NaN. </li>
</ol>

14. Answers:
<ol type="A">
  <li>true, because '2' is mapped to its integer representation</li>
  <li>false, because a string comparison is performed based on lexicographical order, and '2' is a greater string than '12'</li>
  <li>true, because '2' is mapped to its integer representation 2</li>
  <li>false, because === is a strict equality which checks equality without type conversion, and since string and integer are different types, it returns false.</li>
  <li>false, because true is mapped to the number 1, and the integer 1 is not equal to the integer 2</li>
  <li>true, because 2 is mapped to its Boolean representation which is true, and since it is a strict equality, both operands are Boolean type with true value.</li>
</ol>

15. With the strict equality operator ===, the equality is checked without type conversion. In other words, if the operators are different types, then the strict equality operator returns false. However, in a regular eqaulity operator ==, the equality is checked with type conversion if the operators are not the same type, and once they are converted to match each other's types, they are checked for equality.

16. Code -- part1b-question16.js

17. Line 13 will return the array [2,4,6]. When line 13 executes, modifyArray is called with the arguements [1,2,3] and doSomething function. A new array is initialized, and the for-loop will go through each index in the passed array. With each iteration, the for-loop calls the function callback, which is doSomething, with the array index at that iteration, and returns the value at that index multiplied by 2 and pushes it into the new array. Once the for-loop is finished, the new array is returned, storing the values of the original passed array multiplied by 2.

18. Code -- part1b-question18.js

19. Output: <br>
1<br>
4<br>
3<br>
2<br>