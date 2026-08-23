const companions = [
  {
    name: "Elena",
    traits: "The Social & Magnetic",
    image: "/images/ca06d10938b5cda1fbe96c55346138ef632070da.png",
    imagePosition: "center",
  },
  {
    name: "Chloé",
    traits: "The Fun & Adventurous",
    image: "/images/232e279bdfd733848b63cc9443e51be6dc251d55.png",
    imagePosition: "center",
  },
  {
    name: "Thalia",
    traits: "The Confident & Ambitious",
    image: "/images/fde3626f915f6d70fb7d01b07380cb904922a5d8.png",
    imagePosition: "center",
  },
  {
    name: "Anastacia",
    traits: "The Warm & Supportive",
    image: "/images/fdb1e36f1cc03efd26ad7846b94c67a3d7f49d0b.png",
    imagePosition: "center",
  },
  {
    name: "Luna",
    traits: "The Mysterious & Romantic",
    image: "/images/32c144ef77b4dce41f4246bc26adf7780cfd2158.png",
    imagePosition: "center",
  },
];

export default function MeetCompanions() {
  return (
    <section className="bg-[#111115] text-white">
      <div className="mx-auto w-full max-w-[1640px] px-4 py-16 sm:px-8 sm:py-20 lg:px-[7.2vw] lg:py-24">
        <div data-reveal className="mx-auto max-w-[1640px] text-center">
          <h2 className="text-[34px] font-semibold leading-tight sm:text-[44px]">
            Meet Your{" "}
            <span className="italic text-[#C2384F]">Companions</span>
          </h2>
          <p className="font-inter mt-3 text-sm leading-7 text-white/55">
            Five presences. Five distinct ways of moving through the world.
            Follow the story that calls to you.
          </p>
        </div>

        <div
          data-stagger
          className="mt-10 grid gap-4 min-[520px]:grid-cols-2 md:grid-cols-3 lg:gap-5 xl:grid-cols-5"
        >
          {companions.map((companion) => (
            <article
              data-card
              key={companion.name}
              className="group overflow-hidden rounded-lg bg-[#08080b]"
            >
              <div
                className="aspect-[3/4.45] bg-cover bg-no-repeat transition duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${companion.image}')`,
                  backgroundPosition: companion.imagePosition,
                }}
              />

              <div className="p-4 sm:p-5">
                <h3 className="text-2xl leading-none text-white sm:text-[28px]">
                  {companion.name}
                </h3>
                <p className="font-inter mt-2 text-[11px] leading-5 text-white/70">
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
