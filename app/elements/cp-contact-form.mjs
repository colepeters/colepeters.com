export default function ContactForm({ html, state }) {
  const { store } = state
  const { mailstatus = null } = store

  return mailstatus === 200
    ? html`
      <p class="font-semibold">Thanks for your message! It's been delivered, and I'll be in touch soon.</p>
    ` : html`
    <form action="/email" method="POST">
      <label class="block mbe2">
        <span class="block font-medium text-1 mbe-4">Name:</span>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          class="pb-4"
      />
      </label>

      <label class="block mbe2">
        <span class="block font-medium text-1 mbe-4">Email address:</span>
        <input
          type="email"
          name="email"
          placeholder="you@yours.com"
          required
          class="pb-4"
        />
      </label>

      <label class="block mbe2">
        <span class="block font-medium text-1 mbe-4">Message:</span>
        <textarea
          name="message"
          rows="5"
          placeholder="Write your message here"
          class="p-2"
        ></textarea>
      </label>

      <button
        type="submit"
        class="font-semibold uppercase tracking1 mb0 pi0 pb-4"
      >
        Send
      </button>
    </form>
  `
}
