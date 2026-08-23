import { Clock3, Heart, Infinity } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Remember You",
    description: "Your conversations become more personal as Elysia gets to know you.",
    icon: Heart,
  },
  {
    number: "02",
    title: "Understand You",
    description: "Companions designed around your personality, interests, and preferences.",
    icon: Infinity,
  },
  {
    number: "03",
    title: "Always There",
    description: "Meaningful conversations whenever you want someone to talk to.",
    icon: Clock3,
  },
];

export default function MeetElysia() {
  return (
    <section className="bg-[#0f0f13] text-white">
      <div className="mx-auto w-full max-w-[1640px] px-4 py-14 sm:px-8 sm:py-20 lg:px-[7.2vw]">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="text-[38px] font-normal leading-tight sm:text-[48px]">
            Meet Elysia.
          </h2>
          <p className="font-inter mt-4 text-sm leading-7 text-white/58 sm:text-base">
            A new kind of AI companionship, designed around meaningful
            conversation, personalization, and connection.
          </p>
          <p className="mt-4 text-lg italic text-[#C2384F]">Coming soon.</p>
        </div>
      </div>

      <div className="bg-[#08080b]">
        <div className="mx-auto w-full max-w-[1640px] px-4 py-14 sm:px-8 sm:py-20 lg:px-[7.2vw]">
          <div className="mx-auto max-w-[1640px] text-center">
            <h2 className="text-[34px] font-normal leading-tight sm:text-[44px]">
              Designed for{" "}
              <span className="italic text-[#C2384F]">Connection.</span>
            </h2>
            <p className="font-inter mt-4 text-sm leading-7 text-white/55">
              More than conversation. An experience that becomes more personal
              over time.
            </p>
          </div>

          <div className="mt-12 grid gap-10  pb-12 sm:mt-14 sm:grid-cols-3 sm:gap-8 lg:gap-16">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex size-16 items-center justify-center rounded-full border border-[#ff2f70] text-[#C2384F] sm:size-[74px]">
                    <Icon className="size-7" strokeWidth={1.7} />
                  </div>

                  <h3 className="font-inter mt-6 text-sm font-medium text-white">
                    <span className="text-[#C2384F]">{feature.number}</span>
                    <span className="mx-2 text-[#C2384F]">—</span>
                    {feature.title}
                  </h3>

                  <p className="font-inter mt-4 max-w-[270px] text-sm leading-7 text-white/55">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
