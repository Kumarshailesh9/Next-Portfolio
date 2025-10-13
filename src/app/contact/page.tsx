import React from "react";
import ContactForm from "../component/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-white dark:bg-dark/90 py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left - Contact Info */}
          <div className="lg:col-span-6">
            <div className="max-w-xl">
              <span className="block mb-3 text-sm font-semibold text-primary">
                Contact Us
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 dark:text-white mb-4 leading-tight">
                Get in touch with us
              </h2>

              <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
                I’m available for freelance work, collaborations, and full-time
                roles. Share a quick message and I’ll reply as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-none w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl">
                    📍
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Location
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Sector 15, Noida, UP, 201301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-none w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl">
                    📞
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Phone
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      +91 8318130375
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-none w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Email
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      theshaileshkumar9@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
