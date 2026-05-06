import React, { useState } from 'react';
import Image from 'next/image';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleSubmit = async event => {
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
      if (!response.ok) {
        throw new Error(`Subscribe failed: ${response.status}`);
      }
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="mt-10 xl:mt-0 subscribe-form">
      <div className="mb-8">
        <a
          href="https://wheel-rail-seminars.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Image
            src="/wrs-logo-2025.png"
            alt="Wheel Rail Seminars"
            width={200}
            height={60}
            className="h-auto"
          />
        </a>
      </div>
      <h3 className="text-sm font-semibold leading-6 text-white">
        Subscribe to our mailing list!
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-100">
        Receive the latest Wheel/Rail news, articles and announcements,
        sent to your inbox weekly. No spam. Unsubscribe anytime.
      </p>
      {status === 'success' && (
        <div className="mt-4 text-green-400" role="status">
          Thank you for subscribing!
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 text-red-400" role="alert">
          {error}
        </div>
      )}
      <form
        name="subscribe"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="mt-6 sm:flex sm:max-w-md"
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <p hidden>
          <label>
            Don&apos;t fill this out:{' '}
            <input
              name="bot-field"
              value={botField}
              onChange={e => setBotField(e.target.value)}
            />
          </label>
        </p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
          placeholder="Enter your email"
          required
          disabled={status === 'submitting'}
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <button
            className="flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-wri-blue hover:bg-wri-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wri-blue disabled:opacity-60"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </div>
      </form>
    </div>
  );
}
