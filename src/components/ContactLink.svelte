<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import type { Protocol } from "@/types/url";

	interface ContactLinkProps extends HTMLAnchorAttributes {
		protocol: Protocol;
		header?: {
			[index: string]: string | undefined;
			bcc?: string;
			body?: string;
			cc?: string;
			subject?: string;
			text?: string;
		};
		href: string;
		children?: Snippet;
		title: string;
	}

	function reverse(stringToReverse: string): string {
		return [...stringToReverse]
			.toReversed()
			.map((char) => {
				if (char === "(") return ")";
				if (char === ")") return "(";
				return char;
			})
			.join("");
	}

	function createContactLink({
		protocol,
		header,
		href,
	}: Pick<ContactLinkProps, "protocol" | "header" | "href">): string {
		const combinedHeader =
			(header &&
				Object.keys(header)
					.map((key) => `${key}=${encodeURIComponent(header[key] ?? "")}`)
					.join("&")) ||
			"";

		const link = protocol + href;

		if (protocol === "mailto:") {
			return header ? `${link}?${combinedHeader}` : link;
		}

		if (protocol === "tel:") {
			return link.replaceAll(/\s/g, "");
		}

		return link;
	}

	let { children, header, href, protocol, style, ...props }: ContactLinkProps =
		$props();

	let hasInteracted = $state(false);

	const hrefText = $derived(href.slice(Math.max(0, href.indexOf(":") + 1)));

	const handleInteraction = () => {
		hasInteracted = true;
	};

	const directionStyle = $derived(
		[
			style,
			`direction: ${children || hasInteracted ? "ltr" : "rtl"}`,
			"unicode-bidi: bidi-override",
		]
			.filter(Boolean)
			.join("; "),
	);

	const handleClick = (event: MouseEvent) => {
		if (!hasInteracted) {
			event.preventDefault();
			hasInteracted = true;
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Enter" || event.key === " ") {
			handleInteraction();
		}
	};

	const computedHref = $derived(
		hasInteracted ? createContactLink({ protocol, header, href }) : "#",
	);
	const computedAriaLabel = $derived(
		hasInteracted ? undefined : "Kontaktlink - tippen zum Anzeigen",
	);
	const computedRole = $derived(hasInteracted ? "link" : "button");
	const displayText = $derived(hasInteracted ? hrefText : reverse(hrefText));
</script>

<a
	{...props}
	aria-label={computedAriaLabel}
	href={computedHref}
	onclick={handleClick}
	oncontextmenu={handleInteraction}
	onfocus={handleInteraction}
	onkeydown={handleKeyDown}
	onmouseover={handleInteraction}
	ontouchstart={handleInteraction}
	role={computedRole}
	style={directionStyle}
>
	{#if children}
		{@render children()}
	{:else}
		{displayText}
	{/if}
</a>
