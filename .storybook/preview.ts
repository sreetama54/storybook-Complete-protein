import '../src/styles/tokens.css';
import '../src/styles/components.css';

// Toggle the theme from the Storybook toolbar so you can show light and dark side by side.
export const globalTypes = {
  theme: { description: 'Theme', defaultValue: 'light', toolbar: { icon: 'circlehollow', items: ['light', 'dark'] } },
};
export const decorators = [
  (Story: () => unknown, ctx: { globals: { theme: string } }) => {
    document.documentElement.setAttribute('data-theme', ctx.globals.theme);
    document.body.style.background = 'var(--color-surface)';
    return Story();
  },
];

export const parameters = {
  a11y: {
    // 'todo' - show a11y violations in the test UI only
    // 'error' - fail CI on a11y violations
    // 'off' - skip a11y checks entirely
    test: 'todo'
  }
};
