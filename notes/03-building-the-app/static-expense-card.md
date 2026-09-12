# Building a Static Expense Card

> A React Native screen is built by nesting small native components and using styles to describe how each container should lay out its children.

## Why I needed this

The first expense-tracker exercise was to replace the starter screen with a static summary and one expense. This refreshed JSX, core components, styling, and Flexbox without adding application behavior yet.

## What I practiced

### `View` provides structure

A `View` is a layout container. Nesting views creates meaningful regions such as:

- the entire screen;
- the expense card;
- the descriptive information;
- the amount area.

Each container should have a clear layout responsibility. Avoid adding a `View` when it does not group or position anything.

### `Text` displays text

Visible text must be inside a `Text` component. A `Text` can also contain another `Text`, which is useful when part of a sentence needs different styling, such as making only the total bold or colored.

### Flexbox controls relationships

React Native uses Flexbox for layout. Its default direction is column.

- `flexDirection: "row"` places children horizontally.
- `justifyContent: "space-between"` pushes the first and last child toward opposite ends of the main axis.
- `alignItems` controls children along the cross axis.

Flexbox belongs on the parent whose children need to be arranged.

### Styles are JavaScript objects

`StyleSheet.create` groups named styles and helps provide type checking. React Native style properties use JavaScript naming such as `backgroundColor`, and numeric dimensions normally do not include CSS units.

## Plain values versus state

Use a normal variable or object for information that does not change while the component is mounted. Use state only when changing a value should cause React to render the component again.

A date that is calculated once and never updated does not need `useState`. Creating state also creates an unused setter and falsely suggests that the screen has interactive behavior.

For a static exercise, one plain expense object is useful because it:

- keeps related fields together;
- separates the example data from the JSX;
- prepares the mental model for passing an expense to a component later.

## Best practices

- Use camelCase for style keys, such as `cardHeader` and `expenseName`, because they are JavaScript object properties.
- Prefer flexible sizing for main content. A fixed card width can look too narrow or overflow on other devices; horizontal screen padding plus a full or maximum width usually adapts better.
- Give each style and container a single, understandable purpose.
- Keep static UI stateless. Add state only when the user or application can change something.
- Derive displayed summaries from source data once real data exists. Avoid maintaining both expenses and an unrelated total that can disagree.
- Use meaningful names based on purpose rather than visual position alone.
- Test on more than one screen size as layouts become more important.

## What tripped me up

- The task requested a plain hard-coded object, but the first implementation placed the date in state and wrote the other values directly in JSX.
- The state setter was never used. This was a sign that state was unnecessary.
- The displayed total was `$0.00` while the only expense was `$50.00`. Related values should agree, even in a static mockup.
- A fixed card width worked for the initial screen but was not responsive.

These choices did not prevent the UI from rendering, but correcting them makes the intent clearer and prepares the code for later component and data work.

## Remember this

- Structure comes from nested components; layout comes from styles on their parent.
- React Native lays out children vertically unless `flexDirection` changes it.
- If a value cannot change, it probably should not be state.
- Data belongs in data structures; JSX describes how that data appears.
- Working on one device is not proof that a layout is responsive.

## Resources

- [React Native core components](https://reactnative.dev/docs/components-and-apis) — overview of built-in components.
- [React Native `View`](https://reactnative.dev/docs/view) — containers and layout.
- [React Native `Text`](https://reactnative.dev/docs/text) — displaying and nesting text.
- [React Native styles](https://reactnative.dev/docs/style) — style objects and `StyleSheet.create`.
- [React Native Flexbox](https://reactnative.dev/docs/flexbox) — direction, alignment, and distribution.
- [Expo Router for SDK 57](https://docs.expo.dev/versions/v57.0.0/sdk/router/) — the version-specific routing reference.

## Review prompt

Without reading the implementation, can I explain which parent controls the horizontal expense layout, why the static date does not need state, and how I would make the card adapt to different screen widths?
