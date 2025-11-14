# Language Switching via URL Route

## Overview

This feature allows users to change the application language by visiting a special URL route: `/ln/{language_code}`

## Supported Languages

The application supports **20 languages**:

| Code | Language                | URL      |
| ---- | ----------------------- | -------- |
| `en` | English                 | `/ln/en` |
| `es` | Español (Spanish)       | `/ln/es` |
| `ar` | العربية (Arabic)        | `/ln/ar` |
| `zh` | 中文 (Chinese)          | `/ln/zh` |
| `nl` | Nederlands (Dutch)      | `/ln/nl` |
| `fr` | Français (French)       | `/ln/fr` |
| `de` | Deutsch (German)        | `/ln/de` |
| `hi` | हिन्दी (Hindi)          | `/ln/hi` |
| `it` | Italiano (Italian)      | `/ln/it` |
| `ja` | 日本語 (Japanese)       | `/ln/ja` |
| `ko` | 한국어 (Korean)         | `/ln/ko` |
| `ms` | Bahasa Melayu (Malay)   | `/ln/ms` |
| `fa` | فارسی (Persian)         | `/ln/fa` |
| `pl` | Polski (Polish)         | `/ln/pl` |
| `pt` | Português (Portuguese)  | `/ln/pt` |
| `ru` | Русский (Russian)       | `/ln/ru` |
| `sv` | Svenska (Swedish)       | `/ln/sv` |
| `th` | ไทย (Thai)              | `/ln/th` |
| `tr` | Türkçe (Turkish)        | `/ln/tr` |
| `vi` | Tiếng Việt (Vietnamese) | `/ln/vi` |

## How It Works

1. User visits `/ln/{language_code}`
2. System validates the language code
3. If valid:
    - Updates the active locale
    - Saves preference to localStorage
    - Redirects to home page with new language
4. If invalid:
    - Redirects to home page with current language

## Usage Examples

### Direct Links

You can share language-specific links:

```html
<!-- English -->
<a href="https://digidice.games/ln/en">English</a>

<!-- Spanish -->
<a href="https://digidice.games/ln/es">Español</a>

<!-- Chinese -->
<a href="https://digidice.games/ln/zh">中文</a>
```

### In React Components

```tsx
import { generateLanguageUrl } from "@/lib/utils/language";
import Link from "next/link";

function LanguageSwitcher() {
	return (
		<div>
			<Link href={generateLanguageUrl("en")}>English</Link>
			<Link href={generateLanguageUrl("es")}>Español</Link>
			<Link href={generateLanguageUrl("fr")}>Français</Link>
		</div>
	);
}
```

### Get All Languages

```tsx
import { getAllLanguageUrls } from "@/lib/utils/language";

function LanguageMenu() {
	const languages = getAllLanguageUrls();

	return (
		<ul>
			{languages.map(({ code, name, url }) => (
				<li key={code}>
					<a href={url}>{name}</a>
				</li>
			))}
		</ul>
	);
}
```

### Programmatic Navigation

```tsx
import { useRouter } from "next/navigation";
import { generateLanguageUrl } from "@/lib/utils/language";

function SwitchToSpanish() {
	const router = useRouter();

	const handleClick = () => {
		router.push(generateLanguageUrl("es"));
	};

	return <button onClick={handleClick}>Cambiar a Español</button>;
}
```

## Marketing Use Cases

### Email Campaigns

```html
<!-- In email template -->
<a href="https://digidice.games/ln/es"> View in Spanish / Ver en Español </a>
```

### Social Media

Share language-specific links:

-   Facebook: `https://digidice.games/ln/fr` (French users)
-   Twitter: `https://digidice.games/ln/ja` (Japanese users)
-   Instagram: `https://digidice.games/ln/ar` (Arabic users)

### QR Codes

Generate QR codes for specific languages:

-   Event in Spain → QR code to `/ln/es`
-   Event in Germany → QR code to `/ln/de`
-   Event in China → QR code to `/ln/zh`

### Affiliate Links

Affiliates can promote with language-specific links:

```
https://digidice.games/ln/pt?r=affiliate123
```

## API

### `generateLanguageUrl(language: Locale): string`

Generates a language switch URL.

**Parameters:**

-   `language` - Language code (e.g., 'en', 'es', 'fr')

**Returns:**

-   URL string for language switching

**Example:**

```tsx
const url = generateLanguageUrl("fr"); // "/ln/fr"
```

### `getAllLanguageUrls()`

Returns array of all available languages with their URLs.

**Returns:**

```typescript
Array<{
	code: Locale;
	name: string;
	url: string;
}>;
```

**Example:**

```tsx
const languages = getAllLanguageUrls();
// [
//   { code: 'en', name: 'English', url: '/ln/en' },
//   { code: 'es', name: 'Español', url: '/ln/es' },
//   ...
// ]
```

### `isValidLanguage(language: string): boolean`

Checks if a language code is valid.

**Parameters:**

-   `language` - Language code to check

**Returns:**

-   `true` if language is supported, `false` otherwise

**Example:**

```tsx
if (isValidLanguage("fr")) {
	// French is supported
}
```

## Technical Details

### Route Structure

-   **Route:** `/app/(routes)/ln/[language]/page.tsx`
-   **Type:** Dynamic client component
-   **Behavior:** Auto-redirects after language change

### State Management

-   Language preference stored in `localStorage` as `digidice-locale`
-   Managed by `LocaleProvider` context
-   Persists across sessions

### Validation

-   Invalid language codes redirect to home
-   No error pages shown to user
-   Graceful fallback to English if translation missing

## Testing

Test all language routes:

```bash
# English
curl http://localhost:3000/ln/en

# Spanish
curl http://localhost:3000/ln/es

# Invalid language (should redirect)
curl http://localhost:3000/ln/invalid
```

## Files Created/Modified

1. **`/app/(routes)/ln/[language]/page.tsx`** - Dynamic route component
2. **`/lib/utils/language.ts`** - Helper functions for language URLs
3. **This README** - Documentation

## Future Enhancements

Possible improvements:

-   [ ] Remember redirect URL (e.g., `/ln/es?redirect=/profile`)
-   [ ] Add query parameter support (e.g., `/ln/es?ref=email`)
-   [ ] Track language switch events in analytics
-   [ ] Add middleware for automatic language detection
-   [ ] Support language-specific landing pages

## Support

For questions or issues:

1. Check language is in supported list
2. Verify language JSON file exists in `/Dictionary/`
3. Test with valid language code first
4. Check browser console for errors

---

**Built for DigiDice Multi-Language Support** 🌍
