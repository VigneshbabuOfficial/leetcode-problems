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

`Jun 12, 2022`
### 601. Human Traffic of Stadium
https://leetcode.com/problems/human-traffic-of-stadium/
```SQL
# Write your MySQL query statement below
select distinct t1.*
from stadium t1, stadium t2, stadium t3
where t1.people >= 100 and t2.people >= 100 and t3.people >= 100
and
(
    (t1.id - t2.id = 1 and t1.id - t3.id = 2 and t2.id - t3.id =1)  -- t1, t2, t3
    or
    (t2.id - t1.id = 1 and t2.id - t3.id = 2 and t1.id - t3.id =1) -- t2, t1, t3
    or
    (t3.id - t2.id = 1 and t2.id - t1.id =1 and t3.id - t1.id = 2) -- t3, t2, t1
)
order by t1.visit_date;
```

`Wed, 15 June 2022	`
### Combine Two Tables
https://leetcode.com/problems/combine-two-tables/
![image](https://user-images.githubusercontent.com/70185865/173798404-41540d4c-7a78-4193-8227-518018a1c5a2.png)
```SQL

# Write your MySQL query statement below
select p.firstName , p.lastName, a.city, a.state
from Person p
LEFT JOIN Address a ON a.personId=p.personId

```

### Employees Earning More Than Their Managers
https://leetcode.com/problems/employees-earning-more-than-their-managers/
![image](https://user-images.githubusercontent.com/70185865/173799709-a45ae038-6389-4d55-880d-e2cd84feb0ac.png)
![image](https://user-images.githubusercontent.com/70185865/173799770-16dc35b5-4dbc-4ddd-9b14-98865da3e421.png)
```SQL
# Write your MySQL query statement below
select e1.name as Employee
from Employee e1
join employee e2 on e2.id=e1.managerId
where e1.salary > e2.salary
```


