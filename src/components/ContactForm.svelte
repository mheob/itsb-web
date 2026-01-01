<script lang="ts">
	import { getAbsoluteLocaleUrl } from "astro:i18n";
	import { useTranslations } from "@/utils/i18n";

	interface Props {
		lang: "en" | "de";
	}

	let { lang }: Props = $props();

	const ui = {
		en: {
			labels: {
				name: "Your Name",
				email: "Your E-Mail",
				phone: "Your Phone (optional)",
				message: "Your Message",
				privacy: {
					"1": "I expressly agree to the use of my data in accordance with the ",
					"2": "privacy policy",
					"3": ".",
				},
			},
			errors: {
				name: "Please provide a name that I can use to address you.",
				email: "Please provide a valid email address so that I can reply.",
				phone: "Please enter a valid phone number or leave this field blank.",
				message:
					"I need as much information as possible from you so that I can respond in detail. Your message should be at least 30 characters long, but not much more than 10,000 characters.",
				privacy: "You must accept the privacy policy.",
			},
			submitText: "Get in touch",
			privacyDialog: {
				header: "Provisions regarding the use of your data",
				content: {
					"1": 'By clicking on the "Contact us" button and submitting the data entered in the contact form, you agree that I may use your details to respond to your enquiry or to contact you.',
					"2": "Information will not be passed on to third parties unless applicable data protection regulations justify such a transfer or I am legally obliged to do so.",
					"3": {
						"1": "You can revoke your consent at any time with future effect. In the event of revocation, your data will be deleted immediately. Your data will also be deleted once I have processed your request or the purpose for storing it no longer applies. You can request information about the data stored about you at any time. Further information on data protection can also be found in the",
						"2": "privacy policy",
						"3": "on this website.",
					},
				},
			},
		},
		de: {
			labels: {
				name: "Dein Name",
				email: "Deine E-Mail",
				phone: "Deine Telefonnummer (optional)",
				message: "Deine Nachricht",
				privacy: {
					"1": "Ich erkläre mich mit der Verarbeitung meiner Daten einverstanden, die in Übereinstimmung mit der ",
					"2": "Datenschutzrichtlinie",
					"3": " verarbeitet werden.",
				},
				privacyPolicy: "Datenschutzrichtlinie",
			},
			errors: {
				name: "Bitte gebe einen Namen an, unter dem ich dich ansprechen kann.",
				email:
					"Bitte gebe eine gültige E-Mail-Adresse an, damit ich antworten kann.",
				phone:
					"Bitte gebe eine gültige Telefonnummer an oder lassen dieses Feld leer.",
				message:
					"Ich brauche eine möglichst erklärende Nachricht von dir, damit ich auch konkret darauf eingehen kann. Diese sollte mindestens 30, aber nicht viel mehr als 10.000 Zeichen, haben.",
				privacy: "Du musst die Datenschutzrichtlinie akzeptieren",
				privacyPolicy: "Datenschutzrichtlinie",
			},
			submitText: "Kontakt aufnehmen",
			privacyDialog: {
				header: "Bestimmungen zur Nutzung Deiner Daten",
				content: {
					"1": 'Wenn Du die im Kontaktformular eingegebenen Daten durch Klick auf den Button "In Kontakt treten" übersendest, erklärst Du dich damit einverstanden, dass ich Deine Angaben für die Beantwortung Deiner Anfrage bzw. Kontaktaufnahme verwende.',
					"2": "Eine Weitergabe an Dritte findet grundsätzlich nicht statt, es sei denn geltende Datenschutzvorschriften rechtfertigen eine Übertragung oder ich dazu gesetzlich verpflichtet bin.",
					"3": {
						"1": "Du kannst Deine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Im Falle des Widerrufs werden Deine Daten umgehend gelöscht. Deine Daten werden ansonsten ebenfalls gelöscht, wenn ich Deine Anfrage bearbeitet habe oder der Zweck der Speicherung entfallen ist. Du kannst Dich jederzeit über die Deiner Person gespeicherten Daten informieren. Weitere Informationen zum Datenschutz finden Du auch in der ",
						"2": "Datenschutzrichtlinie",
						"3": " dieser Webseite.",
					},
				},
			},
		},
	};

	const t = $derived(useTranslations(ui, lang));

	// Form field values
	let name = $state("");
	let email = $state("");
	let phone = $state("");
	let message = $state("");
	let privacy = $state(false);

	// Error messages
	let errors = $state<Record<string, string | null>>({
		name: null,
		email: null,
		phone: null,
		message: null,
		privacy: null,
	});

	// Touched fields (for showing errors on blur)
	let touched = $state<Record<string, boolean>>({
		name: false,
		email: false,
		phone: false,
		message: false,
		privacy: false,
	});

	// Submit button state
	let submitText = $state("Get in touch");
	let isSubmitting = $state(false);

	// Privacy modal reference
	let privacyModal: HTMLDialogElement | undefined = $state();

	// Derived: is submit disabled
	let isSubmitDisabled = $derived(!privacy || isSubmitting);

	// Validation rules
	const validators = {
		name: (value: string) => {
			const msg = t("errors.name");
			if (!value.trim()) return msg;
			if (value.trim().length < 3 || value.trim().length >= 128) return msg;
			return null;
		},
		email: (value: string) => {
			const msg = t("errors.email");
			if (!value.trim()) return msg;
			const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/;
			if (!emailRegex.test(value)) return msg;
			return null;
		},
		phone: (value: string) => {
			const msg = t("errors.phone");
			if (!value.trim()) return null; // Optional field
			const phoneRegex = /(^$|^(\(?([\d -)+(]+){6,}\)?([ .-\]?)([\d]+))$)/;
			if (!phoneRegex.test(value)) return msg;
			return null;
		},
		message: (value: string) => {
			const msg = t("errors.message");
			if (!value.trim()) return msg;
			if (value.trim().length < 30 || value.trim().length >= 10_000) return msg;
			return null;
		},
		privacy: (checked: boolean) => {
			if (!checked) return t("errors.privacy");
			return null;
		},
	};

	function validateField(fieldName: keyof typeof validators): boolean {
		const values: Record<string, string | boolean> = {
			name,
			email,
			phone,
			message,
			privacy,
		};
		const value = values[fieldName];
		const validator = validators[fieldName];

		let error: string | null;
		if (fieldName === "privacy") {
			error = (validator as (checked: boolean) => string | null)(
				value as boolean,
			);
		} else {
			error = (validator as (value: string) => string | null)(value as string);
		}

		errors[fieldName] = error;
		return !error;
	}

	function validateForm(): boolean {
		const fields = ["name", "email", "phone", "message", "privacy"] as const;
		let isValid = true;

		for (const field of fields) {
			touched[field] = true;
			if (!validateField(field)) {
				isValid = false;
			}
		}

		return isValid;
	}

	function handleBlur(fieldName: keyof typeof validators) {
		touched[fieldName] = true;
		validateField(fieldName);
	}

	function handleInput(fieldName: keyof typeof validators) {
		if (touched[fieldName] && errors[fieldName]) {
			validateField(fieldName);
		}
	}

	function openPrivacyModal() {
		privacyModal?.showModal();
	}

	function handleModalClick(e: MouseEvent) {
		if (e.target === privacyModal) {
			privacyModal?.close();
		}
	}

	function resetForm() {
		name = "";
		email = "";
		phone = "";
		message = "";
		privacy = false;
		errors = {
			name: null,
			email: null,
			phone: null,
			message: null,
			privacy: null,
		};
		touched = {
			name: false,
			email: false,
			phone: false,
			message: false,
			privacy: false,
		};
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (!validateForm()) {
			return;
		}

		try {
			isSubmitting = true;
			submitText = "Sending...";

			const formData = new FormData();
			formData.append("name", name);
			formData.append("email", email);
			formData.append("phone", phone);
			formData.append("message", message);

			const response = await fetch("/api/contact", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				resetForm();
				submitText = "Sent!";
				setTimeout(() => {
					submitText = "Get in touch";
				}, 3000);
			} else {
				const result = await response.json();
				if (result.errors) {
					for (const [field, msg] of Object.entries(result.errors)) {
						errors[field as keyof typeof errors] = msg as string;
						touched[field as keyof typeof touched] = true;
					}
				}
				submitText = "Get in touch";
			}
		} catch {
			submitText = "Error - Try again";
			setTimeout(() => {
				submitText = "Get in touch";
			}, 3000);
		} finally {
			isSubmitting = false;
		}
	}
</script>

<form id="contact-form" onsubmit={handleSubmit}>
	<label>
		<div class="sr-only">{t("labels.name")}</div>
		<input
			type="text"
			name="name"
			placeholder={t("labels.name")}
			bind:value={name}
			onblur={() => handleBlur("name")}
			oninput={() => handleInput("name")}
			class:error={touched.name && errors.name}
		/>
		{#if touched.name && errors.name}
			<p class="error-message">{errors.name}</p>
		{/if}
	</label>
	<label>
		<div class="sr-only">{t("labels.email")}</div>
		<input
			type="email"
			name="email"
			placeholder={t("labels.email")}
			bind:value={email}
			onblur={() => handleBlur("email")}
			oninput={() => handleInput("email")}
			class:error={touched.email && errors.email}
		/>
		{#if touched.email && errors.email}
			<p class="error-message">{errors.email}</p>
		{/if}
	</label>
	<label>
		<div class="sr-only">{t("labels.phone")}</div>
		<input
			type="tel"
			name="phone"
			placeholder={t("labels.phone")}
			bind:value={phone}
			onblur={() => handleBlur("phone")}
			oninput={() => handleInput("phone")}
			class:error={touched.phone && errors.phone}
		/>
		{#if touched.phone && errors.phone}
			<p class="error-message">{errors.phone}</p>
		{/if}
	</label>
	<label>
		<div class="sr-only">{t("labels.message")}</div>
		<textarea
			name="message"
			placeholder={t("labels.message")}
			rows="5"
			bind:value={message}
			onblur={() => handleBlur("message")}
			oninput={() => handleInput("message")}
			class:error={touched.message && errors.message}
		></textarea>
		{#if touched.message && errors.message}
			<p class="error-message">{errors.message}</p>
		{/if}
	</label>
	<label>
		<div class="switch">
			<input
				type="checkbox"
				id="privacy"
				name="privacy"
				bind:checked={privacy}
				onchange={() => handleBlur("privacy")}
			/>
			<span class="switch__text"
				>{t("labels.privacy.1")}<button
					class="anchor"
					type="button"
					onclick={openPrivacyModal}>{t("labels.privacy.2")}</button
				>{t("labels.privacy.3")}</span
			>
		</div>
		{#if touched.privacy && errors.privacy}
			<p class="error-message">{errors.privacy}</p>
		{/if}
		<dialog
			id="privacy-modal"
			bind:this={privacyModal}
			onclick={handleModalClick}
		>
			<header>
				<h2>{t("privacyDialog.header")}</h2>
			</header>
			<div class="modal-content">
				<p>{t("privacyDialog.content.1")}</p>
				<p>{t("privacyDialog.content.2")}</p>
				<p>
					{t("privacyDialog.content.3.1")}
					<a href={getAbsoluteLocaleUrl("en", "privacy")}
						>{t("privacyDialog.content.3.2")}</a
					>
					{t("privacyDialog.content.3.3")}
				</p>
			</div>
		</dialog>
	</label>
	<input
		class="btn btn-primary-outline self-end"
		type="submit"
		disabled={isSubmitDisabled}
		value={submitText}
	/>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 6rem;
		width: 100%;

		input[type="text"],
		input[type="email"],
		input[type="tel"],
		textarea {
			width: 100%;
			padding: 0.5rem 1.25rem;
			color: color-mix(in srgb, var(--white) 70%, transparent);
			font-weight: 400;
			font-size: 1rem;
			line-height: 1.4;
			background: transparent;
			background-image: none;
			border: 1px solid color-mix(in srgb, var(--black) 15%, transparent);
			border-bottom: 1px solid color-mix(in srgb, var(--white) 10%, transparent);
			border-radius: 0;
			box-shadow: none;
			transition: all ease-in-out var(--transition-duration-slow);
			appearance: none;

			&:active,
			&:focus {
				border: 1px solid color-mix(in srgb, var(--black) 10%, transparent);
				border-bottom: 2px solid var(--primary);
				outline: none;
				box-shadow: none;
			}

			&.error {
				border-bottom: 2px solid var(--danger);
			}
		}

		input[type="text"],
		input[type="email"],
		input[type="tel"] {
			height: 3rem;
		}

		textarea {
			height: 10rem;
		}

		.error-message {
			margin-top: 0.5rem;
			padding-left: 1.2rem;
			color: color-mix(in srgb, var(--danger) 75%, transparent);
			font-style: italic;
		}

		.switch {
			display: flex;
			flex-direction: column;
			text-align: center;

			@media (min-width: 700px) {
				flex-direction: row;
				text-align: inherit;
			}

			input[type="checkbox"] {
				--input-width: 2.2rem;
				--input-radius: calc(var(--input-width) / 2);
				--input-height: calc(var(--input-width) / 2);
				--input-light-dims: calc(var(--input-height) / 2.5);
				--input-bg-static: color-mix(in srgb, var(--white), var(--black) 70%);

				position: relative;
				display: block;
				width: var(--input-width);
				height: var(--input-height);
				margin: 0 auto 1rem;
				background-color: var(--input-bg-static);
				border-radius: var(--input-radius);
				outline: none;
				box-shadow: 0 0 0 3px
					color-mix(in srgb, var(--input-bg-static), var(--black) 35%);
				transition: background-color var(--transition-duration) ease;
				appearance: none;

				@media (min-width: 700px) {
					margin: 0.25rem 2rem 0;
				}

				&:before,
				&:after {
					position: absolute;
					display: block;
					border-radius: 100%;
					transition:
						background-color var(--transition-duration) ease,
						transform var(--transition-duration) ease;
					content: "";
				}

				&:before {
					width: calc(var(--input-width) / 2);
					height: var(--input-height);
					background-color: color-mix(
						in srgb,
						var(--background),
						var(--white) 5%
					);
				}

				&:checked {
					&:before {
						background-color: color-mix(
							in srgb,
							var(--primary),
							var(--black) 60%
						);
						transform: translateX(100%);
					}
				}
			}

			.switch__text {
				margin-bottom: 1rem;
			}
		}

		input[type="submit"] {
			display: block;
			width: 100%;
			cursor: pointer;

			@media (min-width: 500px) {
				width: auto;
				margin-left: auto;
			}

			&:disabled {
				color: color-mix(in srgb, var(--white) 30%, transparent);
				background-color: transparent;
				border: 1px solid color-mix(in srgb, var(--white) 30%, transparent);
				cursor: not-allowed;
			}
		}
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	dialog {
		position: fixed;
		top: 20vh;
		left: calc(50% - 30rem);
		width: 60rem;
		background: var(--background);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

		header {
			padding: 1rem 0.5rem;
			background: var(--primary);

			h2 {
				margin: 0.5rem;
			}
		}

		.modal-content {
			max-height: 60vh;
			margin: 0.5rem;
			padding: 1rem 0.5rem;
			overflow-y: auto;
			color: var(--white);
		}
	}
</style>
