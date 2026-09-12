# Learning Journal

A chronological map of the learning journey. Keep entries short and link to detailed notes instead of repeating them here.

## Entry format

### YYYY-MM-DD — Topic or milestone

- **Built:** What changed in the expense tracker.
- **Learned:** The concepts that became clearer.
- **Stuck on:** The confusing part or bug, if any.
- **Next:** The smallest useful next step.
- **Notes:** Links to related notes.

---

## 2026-09-12 — Learning system created

- **Built:** A structured home for project learning notes.
- **Learned:** The project will use learn-by-doing rather than restarting a full beginner course.
- **Next:** Choose the first small version of the expense tracker and inspect the existing project structure.
- **Notes:** [Notes home](./README.md)

## 2026-09-12 — First static expense card

- **Built:** A static expense summary and a responsive styled card showing one expense; then refined it to use a plain data object and derived display values.
- **Learned:** How nested `View` and `Text` components form a screen, how a parent uses Flexbox to arrange children, and why unchanging data does not need state.
- **Stuck on:** The task asked for a plain expense object, but the first version used state for an unchanging date, placed the remaining values directly in JSX, and showed a total that did not match the expense.
- **Next:** Introduce a reusable expense component when ready for props and multiple expenses.
- **Notes:** [Building a static expense card](./03-building-the-app/static-expense-card.md)
