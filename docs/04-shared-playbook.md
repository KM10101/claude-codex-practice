# Shared Playbook

## Golden Workflow

1. understand the task
2. inspect the repository
3. constrain the scope
4. ask for a plan if risk is non-trivial
5. implement in small steps
6. verify with tests and diff review
7. summarize what changed and what remains uncertain

## Prompting Rules

- specify the objective clearly
- specify constraints clearly
- name non-goals
- ask for touched files
- ask for tests and verification
- ask for assumptions and risks

## Useful Constraints

- smallest safe diff
- preserve current architecture
- no new dependencies unless necessary
- do not rename files unless required
- do not change public API unless stated
- prefer existing project patterns

## Review Checklist

- is the root cause actually addressed?
- does the diff introduce new complexity?
- are tests aligned with behavior?
- are logs, errors, and edge cases handled?
- does the solution match the repo's style?

## When to Stop Using the Agent

Pause and inspect manually when:

- the tool starts changing unrelated files
- the problem statement is still unclear
- the repo conventions are not yet understood
- multiple failed attempts suggest model confusion
- the generated approach feels too clever for the problem
