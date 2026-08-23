export default function FinalCta() {
  return (
    <section className="bg-[#08080b] text-white">
      <div className="mx-auto grid min-h-[360px] w-full max-w-[1640px] px-4 sm:px-8 lg:grid-cols-2 lg:px-[7.2vw]">
        <div
          className="min-h-[260px] bg-cover bg-[62%_center] sm:min-h-[340px] lg:min-h-[420px]"
          style={{ backgroundImage: "url('/images/elysia-hero.png')" }}
        />

        <div className="flex items-center py-14 sm:py-20 lg:pl-16">
          <div className="max-w-[640px]">
            <h2 className="text-[42px] font-normal leading-[1.05] sm:text-[58px] lg:text-[60px]">
              One Conversation
              <br />
              Can Change{" "}
              <span className="italic text-[#C2384F]">Everything.</span>
            </h2>
            <p className="font-inter mt-7 max-w-[430px] text-sm leading-7 text-white/58 sm:text-base">
              Elysia is coming soon. Be among the first to experience a new kind
              of connection.
            </p>
            <a
              href="#waitlist"
              className="font-inter mt-8 inline-flex h-[52px] items-center justify-center rounded-lg bg-[#d23567] px-7 text-sm font-medium text-white transition hover:bg-[#C2384F]"
            >
              Join the Waitlist →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
