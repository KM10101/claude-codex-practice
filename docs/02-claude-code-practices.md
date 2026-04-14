# Claude Code Practices

## Best Uses

Claude Code is a great fit for:

- repo understanding
- architecture exploration
- implementation planning
- complex debugging
- careful refactors
- code review and explanation

## High-Value Prompt Shapes

### 1. Ask for an implementation plan first

```text
Inspect this repository and propose a minimal implementation plan for adding X.
Do not edit code yet.
Call out risks, touched files, and test strategy.
```

### 2. Ask for a review before edits

```text
Review the current implementation of X.
Find correctness, safety, and maintainability risks.
Prioritize issues by severity.
Do not change code yet.
```

### 3. Ask for scoped edits

```text
Implement X with the smallest possible change set.
Preserve existing patterns.
Update tests only where necessary.
Summarize the diff afterward.
```

### 4. Ask for explanation and learning support

```text
Explain this module like I am a backend engineer new to this codebase.
Focus on data flow, boundaries, and hidden assumptions.
```

## Good Habits

- start with read/plan/review mode for important work
- ask it to name the files it expects to touch
- ask for risk analysis before large refactors
- ask it to summarize the diff in plain language
- ask it to identify missing tests after implementation

## Common Failure Modes

- over-designing a small task
- making broad changes when a surgical change is better
- assuming conventions that are not actually in the repo
- sounding convincing even when details need verification

## Practical Guardrails

- request minimal diffs
- anchor to existing patterns in the codebase
- require test strategy in the response
- read the final diff yourself
- ask for rollback strategy on risky changes
