import { useState, Fragment } from "react"; // Ensure Fragment is imported here
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null); // Add this line to define error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      const response = await axios.post(
        "/api/subscribe", // Make sure this endpoint matches your setup
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setOpen(true); // Display success message/dialog
      } else {
        // Handle response codes other than success gracefully
        setError("Error subscribing, response status: " + response.status);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setError("Failed to subscribe. Please try again."); // Display a user-friendly error message
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Sign up!</button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Thanks for subscribing!
                </Dialog.Title>
                <Dialog.Description className="mt-2">
                  We received your email address! Watch your inbox for updates.
                </Dialog.Description>
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mt-4"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
