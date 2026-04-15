# 提示词模板

## Feature Task

```text
Implement the following task with the smallest safe change set.

Task:
{{TASK}}

Constraints:
- preserve existing patterns
- avoid unrelated edits
- update tests only where needed
- summarize touched files, tests run, and remaining risks
```

## Debug Task

```text
Investigate and fix the following bug.

Bug:
{{BUG}}

Requirements:
- identify root cause first
- prefer the smallest safe fix
- add or update regression coverage if appropriate
- summarize cause, fix, and verification
```

## 建议用法

- 把 `{{TASK}}` 或 `{{BUG}}` 替换成具体上下文
- 对高风险任务补充“不要修改哪些内容”
- 让工具输出 touched files、tests run、remaining risks
