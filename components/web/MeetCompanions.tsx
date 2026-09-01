const companions = [
  {
    name: "Elena",
    traits: "The Social & Magnetic",
    image: "/images/c1.png",
    imagePosition: "center",
  },
  {
    name: "Luna",
    traits: "The Mysterious & Romantic",
    image: "/images/c2.png",
    imagePosition: "center",
  },
  {
    name: "Lina",
    traits: "The Warm & Supportive",
    image: "/images/c3.png",
    imagePosition: "center",
  },
  {
    name: "Chloé",
    traits: "The Fun & Adventurous",
    image: "/images/c4.png",
    imagePosition: "center",
  },
  {
    name: "Thalia",
    traits: "The Confident & Ambitious",
    image: "/images/c5.png",
    imagePosition: "center",
  },
];

export default function MeetCompanions() {
  return (
    <section className="bg-[#111115] text-white">
      <div className="mx-auto w-full max-w-[1640px] px-4 py-12 sm:px-8 sm:py-20 lg:px-[7.2vw] lg:py-24">
        <div data-reveal className="mx-auto max-w-[1640px] text-center">
          <h2 className="text-[30px] font-semibold leading-[1.08] sm:text-[44px]">
            Meet Your <span className="italic text-[#C2384F]">Companions</span>
          </h2>
          <p className="font-inter mx-auto mt-3 max-w-[310px] text-[13px] leading-6 text-white/55 sm:max-w-none sm:text-base sm:leading-7">
            Five personalities. Who will bring a little more magic into your
            world?
          </p>
        </div>

        <div
          data-stagger
          className="mt-9 grid gap-4 min-[430px]:grid-cols-2 md:grid-cols-3 lg:gap-5 xl:grid-cols-5"
        >
          {companions.map((companion) => (
            <article
              data-card
              key={companion.name}
              className="group overflow-hidden rounded-lg bg-[#08080b]"
            >
              <div
                className="aspect-[3/3.8] bg-cover bg-no-repeat transition duration-500 group-hover:scale-105 sm:aspect-[3/4.45]"
                style={{
                  backgroundImage: `url('${companion.image}')`,
                  backgroundPosition: companion.imagePosition,
                }}
              />

              <div className="p-4 sm:p-5">
                <h3 className="text-[22px] leading-none text-white sm:text-[28px]">
                  {companion.name}
                </h3>
                <p className="font-inter mt-2 text-[13px] leading-5 text-white/70 sm:text-[16px]">
                  {companion.traits}
                </p>
                <div
                  className="mt-3 h-px w-6 bg-[#C2384F]"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
