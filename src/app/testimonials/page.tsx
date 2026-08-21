import Link from "next/link";

const testimonials = [
  {
    name: '"BIG MIKE"',
    tag: "DRAMA KING",
    tagColor: "bg-[#e23d28] text-white",
    headerColor: "bg-[#4f8fba] text-white",
    charge: "Grand theft auto",
    quote: "They said my day had me on tape. They said it was a slam dunk. Saul found a comma and put the whole case on ice.",
    cardColor: "bg-[#fffdf3]",
    rotation: "-rotate-1",
  },
  {
    name: '"SHIFTY" PETE',
    tag: "NOT GUILTY",
    tagColor: "bg-[#f4d35e] text-black",
    headerColor: "bg-[#68b984] text-black",
    charge: "Wire fraud",
    quote: "I do not know how he does it. The prosecutor looked like he was gonna cry. Saul is a magician. A loud, flashy magician in a cheap suit.",
    cardColor: "bg-[#e9f4f2]",
    rotation: "rotate-1",
  },
  {
    name: 'JIMMY "IN-AND-OUT"',
    tag: "SETTLED OUT OF COURT",
    tagColor: "bg-[#e23d28] text-white",
    headerColor: "bg-[#f29b8f] text-black",
    charge: "Premises liability",
    quote: "I slipped on a perfectly dry floor at a supermarket. Saul got me enough to buy a jet ski. He cares about the little guy.",
    cardColor: "bg-[#fff0d8]",
    rotation: "-rotate-1",
  },
  {
    name: "ANONYMOUS C.",
    tag: "ACQUITTED",
    tagColor: "bg-[#4f8fba] text-white",
    headerColor: "bg-[#f4d35e] text-black",
    charge: "Possession with intent",
    quote: "When the DEA came knocking, I did not panic. I called Saul. He talked them long enough for me to... handle my business. Five stars.",
    cardColor: "bg-[#f4e7f1]",
    rotation: "rotate-1",
  },
  {
    name: "WALTER W.",
    tag: "CONFIDENTIAL",
    tagColor: "bg-[#b7b7a4] text-black",
    headerColor: "bg-[#e23d28] text-white",
    charge: "A complicated situation",
    quote: "He is a criminal lawyer. And exactly what we needed when things got complicated. Very resourceful.",
    cardColor: "bg-[#e5edf5]",
    rotation: "-rotate-1",
    featured: true,
  },
];

function Stars() {
  return <span aria-label="Five star rating" className="text-sm tracking-[0.2em] text-[#d79b00]">★★★★★</span>;
}

export default function TestimonialsPage() {
  return (
    <main className="overflow-hidden bg-[#f5f1df] text-black">
      <section className="border-b-[3px] border-black bg-[#e23d28] px-4 pb-14 pt-36 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 inline-block rotate-[-2deg] border-[3px] border-black bg-[#f4d35e] px-3 py-2 font-label-bold text-xs uppercase tracking-[0.18em] shadow-[4px_4px_0_#000]">
            Saul Goodman & Associates / Case File 505
          </p>
          <h1 className="font-display-xl text-[clamp(3.4rem,11vw,8rem)] uppercase leading-[0.82] text-[#f4d35e] [text-shadow:5px_5px_0_#000]">
            Real Clients.<br /><span className="text-white">Real Results.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl font-body-lg text-lg font-bold leading-tight sm:text-2xl">
            Don&apos;t just take our word for it. Hear from the Americans who chose the lawyer who always gets results.
          </p>
          <div className="mx-auto mt-7 inline-flex -rotate-1 items-center gap-3 border-[3px] border-black bg-[#f4d35e] px-5 py-2 shadow-[4px_4px_0_#000]">
            <Stars />
            <span className="font-label-bold text-xs uppercase">Rated dangerously good</span>
          </div>
        </div>
      </section>

      <section className="relative border-b-[3px] border-black px-4 py-14 sm:px-8 sm:py-20" style={{ backgroundImage: "radial-gradient(#171717 1px, transparent 1px)", backgroundSize: "13px 13px" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 flex items-end justify-between gap-4 border-b-[3px] border-black pb-3">
            <h2 className="font-headline-lg text-4xl uppercase leading-none sm:text-6xl">The client wall</h2>
            <span className="hidden bg-black px-2 py-1 font-label-bold text-xs text-[#f4d35e] sm:block">EXHIBIT A</span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className={`${testimonial.rotation} ${testimonial.featured ? "lg:col-span-2" : ""} ${testimonial.cardColor} border-[3px] border-black shadow-[5px_5px_0_#000] transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:rotate-0 hover:shadow-none`}
              >
                <div className={`${testimonial.headerColor} flex items-center justify-between gap-3 border-b-[3px] border-black px-3 py-2`}>
                  <h3 className="font-headline-lg text-xl leading-none sm:text-2xl">{testimonial.name}</h3>
                  <span className={`${testimonial.tagColor} shrink-0 border-2 border-black px-2 py-1 font-label-bold text-[9px] uppercase leading-none`}>{testimonial.tag}</span>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="mb-4 border-[3px] border-black bg-white px-3 py-2 shadow-[3px_3px_0_#000]">
                    <p className="font-label-bold text-[9px] uppercase tracking-[0.16em]">Charged with</p>
                    <p className="mt-1 font-headline-lg text-lg uppercase leading-none">{testimonial.charge}</p>
                  </div>
                  <p className="font-subheading-serif text-sm leading-relaxed sm:text-base">&quot;{testimonial.quote}&quot;</p>
                  <div className="mt-5 flex items-center justify-between border-t-2 border-dashed border-black pt-3">
                    <Stars />
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center border-[3px] border-black bg-[#fffdf3] text-center shadow-[3px_3px_0_#000]">
                      <span className="font-label-bold text-[9px] uppercase leading-[0.9]">Client<br />Selfie</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4d35e] px-4 py-14 sm:px-8 sm:py-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 12px, rgba(226,61,40,.22) 12px 15px)" }}>
        <div className="mx-auto max-w-4xl -rotate-1 border-[3px] border-black bg-[#fffdf3] px-5 py-9 text-center shadow-[7px_7px_0_#000] sm:px-10">
          <p className="font-label-bold text-xs uppercase tracking-[0.2em]">Want to be on this wall?</p>
          <h2 className="mt-2 font-display-xl text-5xl uppercase leading-none sm:text-7xl">Call Saul.</h2>
          <p className="mx-auto mt-4 max-w-xl font-body-lg font-bold">A free consultation is only one phone call away. Completely confidential. Probably.</p>
          <Link href="tel:+15551234567" className="mt-7 inline-block rotate-1 border-[3px] border-black bg-[#e23d28] px-5 py-3 font-headline-lg text-2xl text-white shadow-[4px_4px_0_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            DIAL 505-503-4455
          </Link>
        </div>
      </section>
    </main>
  );
}
