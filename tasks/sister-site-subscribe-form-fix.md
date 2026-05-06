# Sister-site task: AJAX-ify the footer Subscribe form

Apply the same fix that landed in `wri2026hh` (this repo) to the sister
WRI conference site(s) so the footer subscribe form actually shows the
"Thank you" banner instead of bouncing the user to Netlify's default
success page.

## Background

The footer subscribe form is wired to **Netlify Forms** via:

- A visible React form with `name="subscribe"`, `data-netlify="true"`,
  `data-netlify-honeypot="bot-field"`, and a hidden `form-name` input.
- A static fallback at `public/form.html` (becomes `out/form.html`)
  containing a hidden duplicate of the form so Netlify's HTML parser
  detects it during the deploy post-processing step. This is required
  because we use `output: 'export'` (Next.js static export) and the
  visible form is React-rendered, so it isn't visible to the parser.

The submit was a plain HTML POST. Netlify accepts the submission, but
the user is redirected away to Netlify's branded success page, and the
existing `isSubmitted` "Thank you for subscribing!" UI never fires.

## The fix

Replace the plain POST with an AJAX submission that posts
`application/x-www-form-urlencoded` data to `/` with a `form-name` field
matching the registered form. Set local state on success so the
existing thank-you banner renders and the user stays on the page.

Reference implementation in this repo: `src/components/footer/SubscribeForm.js`
(commit on `dev` after this task ships).

### Key implementation notes

1. Keep the static fallback at `public/form.html` — Netlify still needs
   it to detect the form at build time.
2. Keep `data-netlify="true"`, `data-netlify-honeypot="bot-field"`, and
   the hidden `<input name="form-name" value="subscribe">` on the
   visible form. Netlify uses `form-name` to route the AJAX POST.
3. Convert the bot-field input to a controlled component (state-backed)
   and include it in the URL-encoded body so the honeypot still works.
4. Track submission state (`idle | submitting | success | error`) and
   render success/error messaging inline.
5. Disable the input + button while submitting.
6. Clear the email input on success.
7. Drop the stray `'use client'` directive at the top — this project
   uses the Next.js Pages Router; the directive does nothing here.
8. Drop the redundant bare `netlify` attribute (use only the documented
   `data-netlify="true"`).

### Submit handler skeleton

```js
const handleSubmit = async (event) => {
  event.preventDefault();
  setError(null);
  setStatus('submitting');

  const body = new URLSearchParams();
  body.append('form-name', 'subscribe');
  body.append('email', email);
  body.append('bot-field', botField);

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    if (!response.ok) throw new Error(`Subscribe failed: ${response.status}`);
    setStatus('success');
    setEmail('');
  } catch (err) {
    console.error(err);
    setStatus('error');
    setError('Something went wrong. Please try again.');
  }
};
```

## Verification

1. Run `npm run build` and confirm `out/form.html` still exists in the
   build output.
2. Deploy to Netlify (preview deploy is fine).
3. In the Netlify UI, open **Site settings → Forms** and confirm the
   `subscribe` form is listed for the deploy.
4. Submit a test email from the live site footer.
   - The banner ("Thank you for subscribing!") should render in place.
   - Page should NOT redirect away.
   - The submission should appear under **Forms → subscribe** in Netlify.
5. Submit again with the hidden `bot-field` populated via DevTools to
   confirm the honeypot still discards it.

## Netlify configuration

Netlify Forms must be **enabled** for the site (Site settings → Forms →
Form detection). It is on by default for new sites; if the sister site
has it toggled off, turn it on before re-deploying. No `netlify.toml`
form configuration is needed — detection runs on the post-processed
HTML automatically.
