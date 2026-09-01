"use client";

import { Camera, Check, Mail, Music2 } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";

const newsletterUrl = `${process.env.NEXT_PUBLIC_URL ?? ""}/newsletter`;

export default function WaitlistSection() {
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
    <section id="waitlist" className="bg-[#08080b] text-white">
      <div className="mx-auto w-full max-w-[1640px] px-4 py-12 sm:px-8 sm:py-20 lg:px-[7.2vw]">
        <div
          data-reveal
          className="overflow-hidden rounded-2xl border border-[#ff2f70]/35 bg-[radial-gradient(circle_at_80%_0%,rgba(255,47,112,0.26),transparent_42%),linear-gradient(135deg,#17080f_0%,#340915_48%,#5b1025_100%)] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.38)] sm:rounded-3xl sm:p-10 lg:p-14"
        >
          <div className="grid gap-7 md:grid-cols-[1fr_1px_1fr] md:items-center md:gap-10">
            <div className="max-w-[520px]">
              <h2 className="text-[30px] font-normal leading-[1.08] sm:text-[44px]">
                Be First to Meet{" "}
                <span className="italic text-[#C2384F]">Elysia.</span>
              </h2>
              <p className="font-inter mt-3 max-w-[330px] text-[13px] leading-6 text-white/62 sm:mt-5 sm:max-w-[430px] sm:text-base sm:leading-7">
                Elysia is currently in development. Join the waitlist and be
                among the first to experience it.
              </p>
            </div>

            <div className="hidden h-full min-h-[150px] w-px bg-white/10 md:block" />

            <form className="w-full" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="waitlist-email">
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/55" />
                <input
                  id="waitlist-email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="font-inter h-11 w-full rounded-lg border border-white/16 bg-[#111116] px-11 text-xs text-white outline-none transition placeholder:text-white/45 focus:border-[#C2384F] sm:h-[52px] sm:text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-inter mt-3 h-11 w-full rounded-lg bg-[#d23567] px-6 text-xs font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-[#C2384F] disabled:cursor-not-allowed disabled:opacity-70 sm:mt-4 sm:h-[52px] sm:text-sm"
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist"}
              </button>
              <p className="font-inter mt-4 text-center text-xs text-[#ff5c8f] sm:mt-5">
                No spam. Just updates when Elysia is ready.
              </p>
              <p className="font-inter mt-5 text-[11px] leading-5 text-white/48 sm:mt-6 sm:text-xs sm:leading-6">
                © By joining the waitlist, you agree to receive updates from
                Meet Elysia. See our{" "}
                <a href="#" className="text-[#ff5c8f] hover:text-[#ff8aab]">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>

        <div
          data-reveal
          className="mt-4 overflow-hidden rounded-2xl border border-[#ff2f70]/35 bg-[radial-gradient(circle_at_82%_0%,rgba(255,47,112,0.22),transparent_44%),linear-gradient(135deg,#16080e_0%,#310914_48%,#571023_100%)] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.32)] sm:rounded-3xl sm:p-10 lg:p-12"
        >
          <div className="grid gap-7 md:grid-cols-[1fr_1px_1fr] md:items-center md:gap-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-full border-2 border-[#C2384F] text-[#C2384F] sm:size-24">
                <Check className="size-8 sm:size-12" strokeWidth={1.6} />
              </div>

              <div>
                <h2 className="text-[30px] font-normal leading-[1.08] sm:text-[42px]">
                  You&apos;re on the list.
                </h2>
                <p className="font-inter mt-3 max-w-[330px] text-[13px] leading-6 text-white/62 sm:mt-4 sm:max-w-[390px] sm:text-sm sm:leading-7">
                  Thanks for joining Elysia. We&apos;ll let you know when
                  we&apos;re ready for you.
                </p>
                <p className="font-inter mt-3 text-[13px] text-[#C2384F] sm:text-sm">
                  You&apos;re officially on the Elysia waitlist.
                </p>
              </div>
            </div>

            <div className="hidden h-full min-h-[120px] w-px bg-white/10 md:block" />

            <div>
              <p className="font-inter text-[13px] text-white/62 sm:text-sm">
                Follow Elysia on
              </p>
              <div className="mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2 sm:gap-4">
                <a
                  href="#"
                  className="font-inter inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/16 bg-[#111116] px-6 text-xs text-white transition hover:border-[#C2384F] hover:text-[#ff5c8f] sm:h-[52px] sm:text-sm"
                >
                  <Camera className="size-4" />
                  Instagram
                </a>
                <a
                  href="#"
                  className="font-inter inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/16 bg-[#111116] px-6 text-xs text-white transition hover:border-[#C2384F] hover:text-[#ff5c8f] sm:h-[52px] sm:text-sm"
                >
                  <Music2 className="size-4" />
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
