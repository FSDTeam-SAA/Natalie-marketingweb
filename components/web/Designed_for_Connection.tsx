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
    title: "The Spark",
    description:
      "It starts with a conversation. A little curiosity, a little excitement — and that feeling that makes you want to come back for more.",
    iconSrc: "/star.png",
  },
  {
    number: "02",
    title: "The Chemistry",
    description:
      "Flirt, attraction and playful moments. The more you talk, the more the chemistry grows and the more natural it starts to feel.",
    icon: Infinity,
  },
  {
    number: "03",
    title: "Get Closer",
    description:
      "Talk, flirt, open up, and explore a relationship that becomes more personal, emotional and intimate — as much as you want it to.",
    icon: Heart,
  },
];

export default function DesignedForConnection() {
  return (
    <section className="bg-[#08080b] text-white">
      <div className="mx-auto w-full max-w-[1640px] px-4 py-12 sm:px-8 sm:py-20 lg:px-[7.2vw]">
        <div data-reveal className="mx-auto max-w-[1640px] text-center">
          <h2 className="text-[30px] font-normal leading-[1.08] sm:text-[44px]">
            Designed for{" "}
            <span className="italic text-[#C2384F]">Connection.</span>
          </h2>
          <p className="font-inter mx-auto mt-3 max-w-[310px] text-[13px] leading-6 text-white/55 sm:mt-4 sm:max-w-none sm:text-sm sm:leading-7">
            More than conversation. An experience that becomes more personal
            over time.
          </p>
        </div>

        <div
          data-stagger
          className="mt-10 grid gap-9 pb-8 sm:mt-14 sm:grid-cols-3 sm:gap-8 sm:pb-12 lg:gap-16"
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
                  className={`flex size-14 items-center justify-center sm:size-[54px] ${
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
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    Icon && <Icon className="size-5" strokeWidth={1} />
                  )}
                </div>

                <h3 className="font-inter mt-5 text-sm font-medium text-white sm:mt-6">
                  <span className="text-[#C2384F]">{feature.number}</span>
                  <span className="mx-2 text-[#C2384F]">—</span>
                  {feature.title}
                </h3>

                <p className="font-inter mt-3 max-w-[290px] text-[13px] leading-6 text-white/55 sm:mt-4 sm:max-w-[270px] sm:text-sm sm:leading-7">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
