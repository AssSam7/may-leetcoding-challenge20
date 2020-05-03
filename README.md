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
