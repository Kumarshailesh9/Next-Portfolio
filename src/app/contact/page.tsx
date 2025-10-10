import ContactForm from "../component/ContactForm";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-gray-50">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-600 text-center">Contact Me</h1>
        <p className="text-slate-700 mb-6 text-center">
          Want to work together or have a question? Send me a message!
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
