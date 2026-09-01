export default function FinalCta() {
  return (
    <section className="bg-[#08080b] text-white">
      <div
        data-reveal
        className="mx-auto grid w-full max-w-[1640px] px-4 py-12 sm:min-h-[360px] sm:px-8 sm:py-0 lg:grid-cols-2 lg:px-[7.2vw]"
      >
        <div
          className="min-h-[220px] rounded-lg bg-cover bg-[62%_center] sm:min-h-[340px] sm:rounded-none lg:min-h-[420px]"
          style={{ backgroundImage: "url('/images/bakgrund 1.png')" }}
        />

        <div className="flex items-center pt-8 sm:py-20 lg:pl-16">
          <div className="max-w-[640px]">
            <h2 className="text-[32px] font-normal leading-[1.05] sm:text-[58px] lg:text-[60px]">
              One Conversation
              <br />
              Can Spark{" "}
              <span className="italic text-[#C2384F]">Something Real.</span>
            </h2>
            <p className="font-inter mt-4 max-w-[330px] text-[13px] leading-6 text-white/58 sm:mt-7 sm:max-w-[430px] sm:text-base sm:leading-7">
              Meet Elysia - bring chemistry, intimacy and connection to your life.
            </p>
            <a
              href="#waitlist"
              className="font-inter mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-[#d23567] px-6 text-xs font-medium text-white transition hover:bg-[#C2384F] sm:mt-8 sm:h-[52px] sm:w-auto sm:px-7 sm:text-sm"
            >
              Join the Waitlist →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
