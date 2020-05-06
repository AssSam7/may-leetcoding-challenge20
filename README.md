## Day 2 - Jewels and Stones

**Statement:**
You're given strings J representing the types of stones that are jewels, and S representing the stones you have. Each character in S is a type of stone you have. You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

**Example 1:**

```javascript
Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:
```

```javascript
Input: (J = "z"), (S = "ZZ");
Output: 0;
```

**Note:**
S and J will consist of letters and have length at most 50.
The characters in J are distinct.

**Approach:**
This problem falls under the **easy** category of the **Leetcode** levels of difficulty. As the problem is pretty straight forward, it describes implementing a function to count the number of stones that are jewels. My approach is to first find out the stones which are jewels, by iterating over the **J** using the [**_forEach_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) and use the [**_filter_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method of **javascript** to create a new array of the stones which are jewels. The result is just the length of each element in the above newly created array.

## Day 3 - Ransom Note

**Statement:**
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

**Note:**
You may assume that both strings contain only lowercase letters.

```javascript
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

**Approach:**
This problem requires two things to be checked

1. Is each letter of the **ransomNote** present in the **magazine**
2. If above condition is satisfied, count is preserved i.e. each letter of **ransomNote** is present the same number of times or lesser that of the **magazine**

To assess the above conditions, I firstly created two maps **ransomNoteMap** and **magazineMap** with the letter in the respective strings and their counts. After the maps are created by iterating over the **ransomNote** and **magazine**, check the first condition i.e. if each letter of the **ransomNote** is included in the **magazine**. Above condition passed then check if the element we're iterating through has the same value or lesser in both the maps i.e. the occurance of that particular letter of **ransomNote** is lesser or equal to the occurance of that particular letter in **magazineMap**. If all the conditions satisfy then increment a temporary variable to check if all the letters of **ransomNote** satisfy the occurances constraint, yes then return **true** else **false**.

## Day 4 - Number Complement

**Statement:**
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

**Example 1:**

```javascript
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
```

**Example 2:**

```javascript
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
```

**Note:**
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.

**Approach:**
I used **javascript** to solve this problem as well, here to convert a decimal to binary [**_toString_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) method of **Number.prototype** can be used with **2** as argument. I used [**_map()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) for calculating the complement of the binary number and later [**_parseInt_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) with base **2** to convert the binary back to decimal.

## Day 5 - First Unique Character in a String

**Statement:**
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

**Examples:**

```javascript
s = "leetcode";
return 0;
```

```javascript
s = "loveleetcode",
return 2.
```

**Note:**
You may assume the string contain only lowercase letters.

**Approach:**
The problem depicts to identify the first unique character of the string i.e. if you first identify duplicates and eliminate them from the input then rest all are the unique characters of that particular string. I used the [**_filter_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method of arrays in javascript, by specifying a condition using the [**_indexOf_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method returns only the duplicates of the array. Later, filtered the rest based on the duplicates incurred above. The **index** of first element in this **uniques** array is the result.

## Day 6 - Majority Element

**Statement:**
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

**Example 1:**

```javascript
Input: [3, 2, 3];
Output: 3;
```

**Example 2:**

```javascript
Input: [2, 2, 1, 1, 1, 2, 2];
Output: 2;
```

**Approach:**
This problem is very simple, it just needs to identify the element that appears more than **n/2** times in the input. I created a map with element as the key and number of occurances as it's value, iterate over this map and findout which value is more than **n/2** i.e. rounded **n/2** using [**_Math.round_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round). The value of that map **>=** above rounded value, it's key is the majority element that needs to be returned from the function.
