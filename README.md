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
