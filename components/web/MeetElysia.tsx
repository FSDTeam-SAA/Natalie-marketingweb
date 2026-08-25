import Image from "next/image";
import { Heart, Infinity } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  iconSrc?: string;
};

const features: Feature[] = [
  {
    number: "01",
    title: "Remember You",
    description: "YYour conversations become more personal as Elysia remembers the little things that matter to you",
    icon: Heart,
  },
  {
    number: "02",
    title: "Understand You",
    description: "She learns your personality, interests, and preferences — creating a connection that feels uniquely yours.",
    icon: Infinity,
  },
  {
    number: "03",
    title: "Get Closer",
    description: "Talk, flirt, open up, and explore a relationship that becomes as personal and intimate as you want it to be.",
    iconSrc: "/star.png",
  },
];


export default function MeetElysia() {
  return (
    <section className="bg-[#0f0f13] text-white">
      <div className="mx-auto w-full max-w-[1640px] px-4 py-14 sm:px-8 sm:py-20 lg:px-[7.2vw]">
        <div data-reveal className="mx-auto max-w-[680px] text-center">
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
          <div data-reveal className="mx-auto max-w-[1640px] text-center">
            <h2 className="text-[34px] font-normal leading-tight sm:text-[44px]">
              Designed for{" "}
              <span className="italic text-[#C2384F]">Connection.</span>
            </h2>
            <p className="font-inter mt-4 text-sm leading-7 text-white/55">
              More than conversation. An experience that becomes more personal
              over time.
            </p>
          </div>

          <div
            data-stagger
            className="mt-12 grid gap-10  pb-12 sm:mt-14 sm:grid-cols-3 sm:gap-8 lg:gap-16"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  data-card
                  key={feature.number}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`flex size-16 items-center justify-center sm:size-[54px] ${
                      feature.iconSrc
                        ? ""
                        : "rounded-full border border-[#ff2f70] text-[#C2384F]"
                    }`}
                  >
                    {feature.iconSrc ? (
                      <Image
                        src={feature.iconSrc}
                        alt=""
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      Icon && <Icon className="size-5 " strokeWidth={1} />
                    )}
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
