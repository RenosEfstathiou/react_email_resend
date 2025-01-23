"use client";

import { EnvelopeIcon, ShieldCheckIcon, SparklesIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main className="min-w-full min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center">
      <section className="w-full bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Revolutionize Email Development
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400">
            Build, send, and scale emails with Resend and React Email fast, reliable, and beautiful.
          </p>
          <div className="mt-8">
            <button
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-full font-semibold shadow-md"
              onClick={async () => {
                await fetch("/api/emails", {
                  method: "POST", body: JSON.stringify({
                    email: "renosefstathiou98@gmail.com",
                    firstName: "Renos"
                  })
                })
              }}
            >
              Send your first email
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-800 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-indigo-600 text-white p-4 rounded-full inline-block mb-4">
              <EnvelopeIcon className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold">Seamless Integration</h3>
            <p className="mt-2 text-gray-400">
              Easily integrate Resend API and React Email with your applications to streamline email development.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 text-white p-4 rounded-full inline-block mb-4">
              <SparklesIcon className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold">Modern Templates</h3>
            <p className="mt-2 text-gray-400">
              Build stunning, responsive, and production-ready email templates in no time.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white p-4 rounded-full inline-block mb-4">
              <ShieldCheckIcon className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold">Reliable Delivery</h3>
            <p className="mt-2 text-gray-400">
              Ensure lightning-fast and reliable email delivery with Resend’s robust infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-700 py-12 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white">
            Ready to Revolutionize Your Emails?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Build, send, and scale modern emails with ease using Resend and React Email.
          </p>
        </div>
      </section>

      <footer className="w-full bg-gray-800 text-gray-400 py-6 text-center">
        <p className="text-sm">
          Built with ❤️ using Resend and React Email | © {new Date().getFullYear()} Renos Efstathiou
        </p>
      </footer>
    </main>
  );
}
