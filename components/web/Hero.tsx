"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";

const newsletterUrl = `${process.env.NEXT_PUBLIC_URL ?? ""}/newsletter`;

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(newsletterUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        throw new Error("Newsletter request failed");
      }

      toast.success("Thanks for joining the Elysia waitlist.");
      setEmail("");
    } catch {
      toast.error("Could not join the waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#060508] text-white sm:min-h-screen">
      <div
        data-hero-bg
        className="absolute inset-0 translate-x-[1%] scale-105 bg-cover bg-[67%_top] bg-no-repeat sm:translate-x-[8%] sm:scale-110 sm:bg-auto sm:bg-left-top sm:bg-repeat"
        style={{ backgroundImage: "url('/images/elysia-hero.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050407_0%,rgba(5,4,7,0.94)_10%,rgba(5,4,7,0.62)_18%,rgba(5,4,7,0.22)_50%)]" />
      {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,7,0.32)_0%,rgba(5,4,7,0.14)_55%,#050407_100%)]" /> */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,7,0.08)_0%,rgba(5,4,7,0.3)_34%,rgba(5,4,7,0.72)_58%,#050407_86%),linear-gradient(90deg,#050407_0%,rgba(5,4,7,0.72)_48%,rgba(5,4,7,0.26)_100%)] sm:hidden" /> */}

      <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-[1640px] items-center px-4 pb-8 pt-24 sm:min-h-screen sm:items-center sm:px-8 sm:pb-12 sm:pt-28 lg:px-[7.2vw]">
        <div
          data-hero-content
          className="w-full rounded-2xl bg-black/10 pb-2 backdrop-blur-[1px] sm:rounded-none sm:bg-transparent sm:pb-0 sm:backdrop-blur-0"
        >
          <p className="font-inter mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C2384F] sm:mb-5 sm:text-sm">
            Meet Elysia
          </p>

          <h1 className="max-w-[310px] text-[32px] font-normal leading-[1.04] text-white min-[380px]:text-[36px] sm:max-w-none sm:text-[64px] sm:leading-[0.98] lg:text-[72px]">
            Something Different
            <br />
            Is <span className="italic text-[#C2384F]">Coming.</span>
          </h1>

          <p className="font-inter mt-3 max-w-[300px] text-[13px] leading-snug text-white sm:mt-7 sm:max-w-[780px] sm:text-[28px]">
            A private AI girlfriend — designed for connection,<span className="text-[#C2384F]">intimacy</span> and a <span className="text-[#C2384F]">relationship</span> that grows with you.
          </p>

          <p className="font-inter mt-3 max-w-[300px] text-[11px] leading-5 text-white/68 sm:mt-8 sm:max-w-[560px] sm:leading-7 sm:text-base">
           Meet someone who remembers you, understands you and becomes more than just someone to talk to.
          </p>

          <form
            className="mt-4 flex w-full max-w-[360px] flex-col gap-2.5 sm:mt-7 sm:max-w-[590px] sm:flex-row sm:gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              aria-label="Email address"
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="font-inter h-10 lg:w-[600px] rounded-lg border border-[#C2384F]/70 bg-white/[0.1] px-4 text-xs text-white outline-none transition  placeholder:text-white/52 focus:border-[#ff2f70] focus:bg-white/[0.13] sm:h-12 sm:px-5 sm:text-sm sm:bg-white/[0.06] sm:focus:bg-white/[0.08] "
              required
            />


            <button
              type="submit"
              disabled={isSubmitting}
              className="font-inter h-10 shrink-0 rounded-lg bg-[#d93668] px-6 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(194,56,79,0.28)] transition hover:bg-[#C2384F] disabled:cursor-not-allowed disabled:opacity-70 sm:h-12 sm:px-7 sm:text-sm sm:font-medium sm:shadow-none"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </button>
          </form>

          <p className="font-inter mt-3 flex max-w-[300px] items-center gap-2.5 text-[11px] leading-5 text-white/68 sm:mt-5 sm:max-w-none sm:gap-3 sm:text-sm sm:leading-6 sm:text-white/62">
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-[#ff2f70] text-[10px] text-[#ff2f70] sm:size-5 sm:text-xs">
              ✓
            </span>
            Be among the first to experience Elysia.
          </p>
        </div>
      </div>
    </section>
  );
}
