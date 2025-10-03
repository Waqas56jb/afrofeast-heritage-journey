const cards = [
  {
    title: "Heritage Seeker",
    desc: "Reconnect with your roots and discover the story of your ancestors.",
  },
  {
    title: "Cultural Explorer",
    desc: "Immerse yourself in the vibrant culture, art, and traditions of Ghana.",
  },
  {
    title: "Curious Traveller",
    desc: "Experience the beauty of Ghana with a unique, insightful itinerary.",
  },
];

export default function Guides() {
  return (
    <section className="bg-teal-900">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold">Meet Your Heritage Guides</h2>
        <p className="mt-2 text-teal-100">
          Whatever your connection to Ghana, we have a guided path for you. Which one are you?
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl bg-teal-800/80 p-6 shadow-lg ring-1 ring-black/5">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-700/80">
                <span className="text-2xl">🧭</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-teal-100">{c.desc}</p>
              <button className="mt-6 w-full rounded-full bg-amber-400 px-5 py-2 text-teal-900 hover:bg-amber-300">
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
