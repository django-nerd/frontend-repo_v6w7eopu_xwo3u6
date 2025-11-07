import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Message sent! I will get back to you soon.');
  }

  return (
    <section id="contact" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Let’s collaborate</h2>
          <p className="mt-2 text-slate-700">Have an idea or opportunity? I’d love to hear about it.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
              <input required type="text" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-indigo-500 focus:ring" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input required type="email" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-indigo-500 focus:ring" />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
            <textarea required rows={5} className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none ring-indigo-500 focus:ring" />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-green-600">{status}</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800">
              Send Message <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
