import { fireEvent } from '@testing-library/dom'
import { render, screen } from '@testing-library/svelte'
import { describe, expect, it, vi } from 'vitest'

import Button from '$lib/components/Button/Button.svelte'

describe('Button.svelte', () => {
	it('Renders with minimal props',async () => {
		const { getByTestId } = render(Button)
		expect(getByTestId).toBeTruthy()
	})
})
