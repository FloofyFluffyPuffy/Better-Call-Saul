import Link from "next/link";



export function Stars() {
  return <span aria-label="Five star rating" className="text-sm tracking-[0.2em] text-[#d79b00]">★★★★★</span>;
}

export default function Testimonials() {
  return (
    <main className="overflow-hidden bg-[#f5f1df] text-black">

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
