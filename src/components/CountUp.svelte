<script lang="ts">
import { nanoid } from 'nanoid';
import { inview } from 'svelte-inview';

interface Props {
	value: number | string;
	duration?: number;
	format?: boolean;
	initial?: number;
	prefix?: string;
	roundTo?: number;
	step?: number;
	suffix?: string;
}

let {
	value,
	duration = 1500,
	format = true,
	initial = 0,
	prefix = '',
	roundTo = 1,
	step = 1,
	suffix = '',
}: Props = $props();

const id = nanoid();

let isInView = $state(false);

function formatNumber(input: number): string | number {
	return format ? Math.round(input).toLocaleString() : input;
}

const counterResult: Record<string, number> = {};
const timers: Record<string, ReturnType<typeof setInterval>> = {};

const max = $derived(parseInt(String(value), 10));

let displayValue = $state(0);

$effect(() => {
	// Clear any existing interval
	if (timers[id]) {
		clearInterval(timers[id]);
	}

	if (Number.isNaN(max) || max <= initial) return;

	// Ensure step is large enough to avoid too-frequent intervals
	let adjustedStep = step;
	while (duration / ((max - initial) / adjustedStep) < 2) {
		adjustedStep++;
	}

	// Reset counter
	counterResult[id] = initial;
	displayValue = initial;

	// Set up new interval with reactive values
	timers[id] = setInterval(
		() => {
			if (isInView) {
				if (counterResult[id] < max) {
					counterResult[id] += adjustedStep;
					displayValue = counterResult[id];
				} else {
					clearInterval(timers[id]);
					counterResult[id] = Math.round(max / roundTo) * roundTo;
					displayValue = counterResult[id];
				}
			}
		},
		duration / ((max - initial) / adjustedStep),
	);

	// Cleanup on unmount or when dependencies change
	return () => {
		if (timers[id]) {
			clearInterval(timers[id]);
		}
	};
});
</script>

<span
	use:inview
	oninview_change={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}>{prefix}{formatNumber(displayValue)}{suffix}</span
>
