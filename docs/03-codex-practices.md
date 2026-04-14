# Codex Practices

## Best Uses

Codex is a strong choice for:

- direct implementation tasks
- bug fixes in a specific repo
- repetitive edits
- quick prototype changes
- command-driven execution inside git repositories

## High-Value Prompt Shapes

### 1. Focused implementation task

```text
Add X to this repo.
Keep the change set small.
Follow existing patterns.
Run relevant tests and summarize results.
```

### 2. Bugfix task

```text
Reproduce and fix the bug described below.
Find the root cause first.
Implement the smallest safe fix.
Explain what changed and why.
```

### 3. Test generation task

```text
Add tests for the current behavior of X.
Prefer meaningful coverage over broad low-value tests.
```

### 4. Refactor task

```text
Refactor this module for readability without changing behavior.
Avoid unnecessary file moves.
List any assumptions you make.
```

## Good Habits

- give Codex concrete and bounded tasks
- keep each run focused on one outcome
- ensure the repo is clean before major runs
- prefer running it inside real git repositories
- inspect the final diff instead of trusting the summary alone

## Common Failure Modes

- too much change requested in one prompt
- unclear acceptance criteria
- missing repo context
- fixing symptoms instead of root cause

## Practical Guardrails

- define success explicitly
- state what not to change
- require tests where applicable
- break large work into multiple runs
- review diffs file-by-file after completion
