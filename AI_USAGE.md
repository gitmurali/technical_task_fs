# AI USAGE

This document outlines the usage of AI in the project, including how it is integrated into the development workflow and any specific AI tools or libraries used.

## AI Integration

used github co-pilot to generate frontned select box for categories selection to select the parent category. Here's an example

```
You are a React developer. Build a Category Parent Selector component with the following requirements:
	•	Data
	•	Fetch categories from GET /categories (id, name, parent_name, parentId).
	•	Handle loading and error states gracefully.
	•	UI
	•	Render a select dropdown labeled “Select parent category”.
	•	Populate options from fetched categories (use name as label, id as value).
	•	Include a default “None” option (value: empty or null).
	•	Next to each category row in the existing category list on the page, render a checkbox to mark that row as the “selected category”.
	•	Behavior
	•	When a category is selected (via checkbox), the dropdown should allow choosing a different category as its parent.
	•	Prevent selecting itself as its own parent
	•	Optionally prevent choosing a descendant as parent (to avoid cycles).
	•	On parent selection change, call PUT /categories/:id/set-parent with { parentId }.
	•	Show success/error feedback; optimistically update UI on success.
	•	State
	•	Keep state for:
	•	categories: Category[]
	•	selectedCategoryId: string | null
	•	selectedParentId: string | null
	•	loading/error flags for fetch and update
	•	Use a label for the select, keyboard navigation, and proper aria attributes.
	•	Types
	•	Define Category type: { id: string; name: string; parentId: string | null }
	•	Code style
	•	Use React with functional components and hooks (useEffect/useState).
	•	Use async/await fetch with proper error handling and JSON parsing.
	•	Include minimal CSS-in-JS or classNames placeholders.
```
