'use client'
import React, { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="mt-10 xl:mt-0 subscribe-form">
      <h3 className="text-sm font-semibold leading-6 text-white">
        Subscribe to our mailing list!
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-100">
        Receive the latest Wheel/Rail news, articles and announcements,
        sent to your inbox weekly. No spam. Unsubscribe anytime.
      </p>
      {isSubmitted && (
        <div className="mb-4 text-green-500">
          Thank you for subscribing!
        </div>
      )}
      <form
        name="subscribe"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
        className="mt-6 sm:flex sm:max-w-md"
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <p hidden>
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
          placeholder="Enter your email"
          required
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <button
            className="flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-wri-blue hover:bg-wri-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wri-blue"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}