# Daily Workflows

## Workflow 1: New Feature

1. ask for a quick architecture read
2. ask for a minimal implementation plan
3. execute the smallest useful slice
4. run tests
5. review diff
6. refine only if needed

## Workflow 2: Debugging

1. reproduce the issue
2. ask for root cause hypotheses
3. inspect relevant code paths
4. implement the smallest safe fix
5. add or update regression tests
6. summarize why the bug happened

## Workflow 3: Refactor

1. ask for refactor boundaries first
2. identify invariants that must not change
3. perform small refactor steps
4. run tests after each meaningful step
5. produce a final behavior-preservation summary

## Workflow 4: Code Review

1. provide the diff or PR context
2. ask for severity-ranked findings
3. separate correctness, maintainability, and style issues
4. verify important comments manually
5. convert useful findings into checklist items

## Workflow 5: Technical Research

1. ask for a comparison table
2. ask for trade-offs in your context
3. ask for decision criteria
4. ask for a recommendation with assumptions
5. write down the final conclusion in repo docs
