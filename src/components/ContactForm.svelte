<script lang="ts">
import { getAbsoluteLocaleUrl } from 'astro:i18n';

// Form field values
let name = $state('');
let email = $state('');
let phone = $state('');
let message = $state('');
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
let submitText = $state('Get in touch');
let isSubmitting = $state(false);

// Privacy modal reference
let privacyModal: HTMLDialogElement | undefined = $state();

// Derived: is submit disabled
let isSubmitDisabled = $derived(!privacy || isSubmitting);

// Validation rules
const validators = {
	name: (value: string) => {
		const msg = 'Please provide a name that I can use to address you.';
		if (!value.trim()) return msg;
		if (value.trim().length < 3 || value.trim().length >= 128) return msg;
		return null;
	},
	email: (value: string) => {
		const msg = 'Please provide a valid email address so that I can reply.';
		if (!value.trim()) return msg;
		const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/;
		if (!emailRegex.test(value)) return msg;
		return null;
	},
	phone: (value: string) => {
		const msg = 'Please enter a valid phone number or leave this field blank.';
		if (!value.trim()) return null; // Optional field
		const phoneRegex = /(^$|^(\(?([\d -)+(]+){6,}\)?([ .-\]?)([\d]+))$)/;
		if (!phoneRegex.test(value)) return msg;
		return null;
	},
	message: (value: string) => {
		const msg =
			'I need as much information as possible from you so that I can respond in detail. Your message should be at least 30 characters long, but not much more than 10,000 characters.';
		if (!value.trim()) return msg;
		if (value.trim().length < 30 || value.trim().length >= 10_000) return msg;
		return null;
	},
	privacy: (checked: boolean) => {
		if (!checked) return 'You must accept the privacy policy';
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
	if (fieldName === 'privacy') {
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
	const fields = ['name', 'email', 'phone', 'message', 'privacy'] as const;
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
	name = '';
	email = '';
	phone = '';
	message = '';
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
		submitText = 'Sending...';

		const formData = new FormData();
		formData.append('name', name);
		formData.append('email', email);
		formData.append('phone', phone);
		formData.append('message', message);

		const response = await fetch('/api/contact', {
			method: 'POST',
			body: formData,
		});

		if (response.ok) {
			resetForm();
			submitText = 'Sent!';
			setTimeout(() => {
				submitText = 'Get in touch';
			}, 3000);
		} else {
			const result = await response.json();
			if (result.errors) {
				for (const [field, msg] of Object.entries(result.errors)) {
					errors[field as keyof typeof errors] = msg as string;
					touched[field as keyof typeof touched] = true;
				}
			}
			submitText = 'Get in touch';
		}
	} catch {
		submitText = 'Error - Try again';
		setTimeout(() => {
			submitText = 'Get in touch';
		}, 3000);
	} finally {
		isSubmitting = false;
	}
}
</script>

<form id="contact-form" onsubmit={handleSubmit}>
  <label>
		<div class="sr-only">Your Name</div>
    <input
			type="text"
			name="name"
			placeholder="Your Name"
			bind:value={name}
			onblur={() => handleBlur('name')}
			oninput={() => handleInput('name')}
			class:error={touched.name && errors.name}
		/>
    {#if touched.name && errors.name}
			<p class="error-message">{errors.name}</p>
		{/if}
  </label>
  <label>
		<div class="sr-only">Your E-Mail</div>
    <input
			type="email"
			name="email"
			placeholder="Your E-Mail"
			bind:value={email}
			onblur={() => handleBlur('email')}
			oninput={() => handleInput('email')}
			class:error={touched.email && errors.email}
		/>
    {#if touched.email && errors.email}
			<p class="error-message">{errors.email}</p>
		{/if}
  </label>
	<label>
		<div class="sr-only">Your Phone (optional)</div>
    <input
			type="tel"
			name="phone"
			placeholder="Your Phone (optional)"
			bind:value={phone}
			onblur={() => handleBlur('phone')}
			oninput={() => handleInput('phone')}
			class:error={touched.phone && errors.phone}
		/>
    {#if touched.phone && errors.phone}
			<p class="error-message">{errors.phone}</p>
		{/if}
  </label>
  <label>
		<div class="sr-only">Your Message</div>
    <textarea
			name="message"
			placeholder="Your request (If you would prefer a callback instead of a reply email, please indicate this here.)"
			rows="5"
			bind:value={message}
			onblur={() => handleBlur('message')}
			oninput={() => handleInput('message')}
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
				onchange={() => handleBlur('privacy')}
			/>
			<span class="switch__text">I expressly agree to the use of my data in accordance with the <button class="anchor" type="button" onclick={openPrivacyModal}>privacy policy</button>.</span>
		</div>
		{#if touched.privacy && errors.privacy}
			<p class="error-message">{errors.privacy}</p>
		{/if}
		<dialog id="privacy-modal" bind:this={privacyModal} onclick={handleModalClick}>
			<header>
				<h2>Provisions regarding the use of your data</h2>
			</header>
			<div class="modal-content">
				<p>By clicking on the "Contact us" button and submitting the data entered in the contact form, you agree that I may use your details to respond to your enquiry or to contact you.</p>
				<p>Information will not be passed on to third parties unless applicable data protection regulations justify such a transfer or I am legally obliged to do so.</p>
				<p>You can revoke your consent at any time with future effect. In the event of revocation, your data will be deleted immediately. Your data will also be deleted once I have processed your request or the purpose for storing it no longer applies. You can request information about the data stored about you at any time. Further information on data protection can also be found in the <a href={getAbsoluteLocaleUrl('en', 'privacy')}>privacy policy</a> on this website.</p>
			</div>
		</dialog>
	</label>
  <input class="btn btn-primary-outline self-end" type="submit" disabled={isSubmitDisabled} value={submitText} />
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
				box-shadow: 0 0 0 3px color-mix(in srgb, var(--input-bg-static), var(--black) 35%);
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
					transition: background-color var(--transition-duration) ease,
						transform var(--transition-duration) ease;
					content: "";
				}

				&:before {
					width: calc(var(--input-width) / 2);
					height: var(--input-height);
					background-color: color-mix(in srgb, var(--background), var(--white) 5%);
				}

				&:checked {
					&:before {
						background-color: color-mix(in srgb, var(--primary), var(--black) 60%);
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
      margin: .5rem;
      padding: 1rem .5rem;
      overflow-y: auto;
      color: var(--white);
    }
  }
</style>
