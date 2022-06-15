
### 1 Two Sum

https://leetcode.com/problems/two-sum/

```JS

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
-------------------------------------------------------------------
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
-------------------------------------------------------------------
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
------------------------------------------------------------------
 

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

```

```JAVA
package problems;

import java.util.Arrays;

public class LeetcodeProblems {

	
	public static int[] twoSum(int[] nums, int target) {

		int firstNum = 0;
		int secondNum = 0;

		int[] resultArr = new int[2];

		int firstIndex = 0;
		while (firstIndex < nums.length) {

			firstNum = nums[firstIndex];
 
			for (int secondIndex = firstIndex + 1; secondIndex < nums.length; secondIndex++) {
				secondNum = nums[secondIndex];

				if ((firstNum + secondNum) == target) {
					resultArr[0] = firstIndex;
					resultArr[1] = secondIndex;
					return resultArr;
				}
			}
			
			firstIndex++;
		}

		return resultArr;

	}

	public static void main(String[] args) {

		int[] nums = {3,3};

		int[] resultArr = twoSum(nums, 6);
		
		System.out.println("  resultArr = "+ Arrays.toString(resultArr) );

	}

}

OUTPUT:

  resultArr = [0, 1]
```

## 2 -  Palindrome Number
https://leetcode.com/problems/palindrome-number/

![image](https://user-images.githubusercontent.com/70185865/173795821-6a534311-0fb6-4b7f-9845-497c3a9bd5e4.png)


```JAVA



package problems;

import java.util.Arrays;

public class LeetcodeProblems {

	public static boolean isPalindrome(int x) {
		
		String originalNum = String.valueOf(x);
		
		StringBuilder revNum = new StringBuilder(originalNum).reverse();
		
		return originalNum.equals( revNum.toString());

	}

	public static void main(String[] args) {


		System.out.println("  result = " + isPalindrome(10));

	}

}
```


