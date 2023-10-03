### things to do

1. Rethink the logic.
2. Write tests

### simple logics

### features

1. float calculation
2. plus, minus, multiply, div, equal
3. percentage
4. clear recent number
5. clear all
6. clear one by one

### ground rules

-   state to check if first_value: boolean
-   if `current_value === null` don't allow operators only allow number
-   if number is pressed just push the number to current_value
-   if operator pressed if previous_value is empty add number array to previous_value
-   if previous_value exists do the operation with current_value and save to previous_value
-   show previous_value in the prev_box
-   show current_value in the main_box
-

# testing ideas

## inputvalue

### check common userflow

    - call with "1" CURRENT_NUMBER toBe("1")
    - call with "2" CURRENT_NUMBER toBe("12")
    - call with "+" CURRENT_NUMBER toBe("") PREV_NUMBER toBe("12")
    - call with "34" CURRENT_NUMBER toBe("34")
    - call with "=" CURRENT_NUMBER toBe("") PREV_NUMBER toBe("46")

### check common userflow for all the operators allowed

    // figure out

### minus number input

    - call with "-" CURRENT_NUMBER toBe("-")
    - call with "2" CURRENT_NUMBER toBe("-2")
    - call with "0" CURRENT_NUMBER toBe("-20")
    - call with "+" CURRENT_NUMBER toBe("") PREV_NUMBER toBe("-20")
    - call with "3" CURRENT_NUMBER toBe("3")
    - call with "=" CURRENT_NUMBER toBe("") PREV_NUMBER toBe("-17")

### check dot

    // figure out

## clear-operators:

### beforeEach

    - call inputValue("1")
    - call inputValue("-")
    - call inputValue("246")

### check clearLastDigit()

    - call clearLastDigit() CURRENT_NUMBER toBe("24")

### check clearLastDigit()

    - call clearCurrent() CURRENT_NUMBER toBe("") PREV_NUMBER toBe("1")

### check clearEverything()

    - call clearCurrent() CURRENT_NUMBER toBe("") PREV_NUMBER toBe("") CURRENT_OPERATOR toBe("")

## pitfalls

### shouldn't allow selecting operator before setting first CURRENT_NUMBER

### shouldn't allow "=" if PREV_NUMBER !== "" but CURRENT_NUMBER === ''

### allowed to change operator if operator is selected before setting CURRENT_NUMBER
