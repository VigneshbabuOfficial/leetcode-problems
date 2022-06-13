## SQL

 `Jun 11, 2022`
 
### 176. Second Highest Salary
https://leetcode.com/problems/second-highest-salary/

```SQL
SELECT COALESCE(MAX(Salary)) AS SecondHighestSalary
FROM Employee 
WHERE Salary < (SELECT MAX(Salary) FROM Employee);
```

### 1587. Bank Account Summary II
https://leetcode.com/problems/bank-account-summary-ii/

```SQL
# Write your MySQL query statement below
select u.name,sum(tr.amount) as balance
from Transactions tr
join Users u on u.account=tr.account 
group by tr.account
having sum(tr.amount) > 10000
```

### 178. Rank Scores
https://leetcode.com/problems/rank-scores/
```SQL
# Write your MySQL query statement below
select score,
DENSE_RANK() OVER ( ORDER BY score DESC ) 'rank'
from Scores
```
