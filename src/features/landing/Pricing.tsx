export default function Pricing() {
  return (
    <section className="bg-teal-900">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h3 className="text-2xl font-semibold">Simple, Accessible Pricing</h3>
        <p className="mt-2 text-teal-100">Fair pricing adjusted for your location.</p>
        <div className="mx-auto mt-10 max-w-sm rounded-2xl bg-teal-800/80 p-8 shadow-lg ring-1 ring-black/5">
          <p className="text-sm text-teal-100">Starting from</p>
          <p className="mt-2 text-5xl font-semibold text-amber-400">$9</p>
          <p className="text-sm text-teal-100">/month</p>
        </div>
      </div>
    </section>
  );
}
