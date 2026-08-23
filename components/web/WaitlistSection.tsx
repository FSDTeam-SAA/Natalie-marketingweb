import { Camera, Check, Mail, Music2 } from "lucide-react";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-[#08080b] text-white">
      <div className="mx-auto w-full max-w-[1640px] px-4 py-16 sm:px-8 sm:py-20 lg:px-[7.2vw]">
        <div className="overflow-hidden rounded-3xl border border-[#ff2f70]/35 bg-[radial-gradient(circle_at_80%_0%,rgba(255,47,112,0.26),transparent_42%),linear-gradient(135deg,#17080f_0%,#340915_48%,#5b1025_100%)] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.38)] sm:p-10 lg:p-14">
          <div className="grid gap-8 md:grid-cols-[1fr_1px_1fr] md:items-center md:gap-10">
            <div className="max-w-[520px]">
              <h2 className="text-[34px] font-medium leading-tight sm:text-[44px]">
                Be First to Meet{" "}
                <span className="italic text-[#C2384F]">Elysia.</span>
              </h2>
              <p className="font-inter mt-5 max-w-[430px] text-sm leading-7 text-white/62 sm:text-base">
                Elysia is currently in development. Join the waitlist and be
                among the first to experience it.
              </p>
            </div>

            <div className="hidden h-full min-h-[150px] w-px bg-white/10 md:block" />

            <form className="w-full">
              <label className="sr-only" htmlFor="waitlist-email">
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/55" />
                <input
                  id="waitlist-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="font-inter h-[52px] w-full rounded-lg border border-white/16 bg-[#111116] px-11 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-[#C2384F]"
                />
              </div>
              <button
                type="submit"
                className="font-inter mt-4 h-[52px] w-full rounded-lg bg-[#d23567] px-6 text-sm font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-[#C2384F]"
              >
                Join the Waitlist
              </button>
              <p className="font-inter mt-5 text-center text-xs text-[#ff5c8f]">
                No spam. Just updates when Elysia is ready.
              </p>
              <p className="font-inter mt-6 text-xs leading-6 text-white/48">
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

        <div className="mt-4 overflow-hidden rounded-3xl border border-[#ff2f70]/35 bg-[radial-gradient(circle_at_82%_0%,rgba(255,47,112,0.22),transparent_44%),linear-gradient(135deg,#16080e_0%,#310914_48%,#571023_100%)] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.32)] sm:p-10 lg:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_1px_1fr] md:items-center md:gap-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-full border-2 border-[#C2384F] text-[#C2384F] sm:size-24">
                <Check className="size-10 sm:size-12" strokeWidth={1.6} />
              </div>

              <div>
                <h2 className="text-[32px] font-medium leading-tight sm:text-[42px]">
                  You&apos;re on the list.
                </h2>
                <p className="font-inter mt-4 max-w-[390px] text-sm leading-7 text-white/62">
                  Thanks for joining Elysia. We&apos;ll let you know when
                  we&apos;re ready for you.
                </p>
                <p className="font-inter mt-3 text-sm text-[#C2384F]">
                  You&apos;re officially on the Elysia waitlist.
                </p>
              </div>
            </div>

            <div className="hidden h-full min-h-[120px] w-px bg-white/10 md:block" />

            <div>
              <p className="font-inter text-sm text-white/62">
                Follow Elysia on
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <a
                  href="#"
                  className="font-inter inline-flex h-[52px] items-center justify-center gap-2 rounded-lg border border-white/16 bg-[#111116] px-6 text-sm text-white transition hover:border-[#C2384F] hover:text-[#ff5c8f]"
                >
                  <Camera className="size-4" />
                  Instagram
                </a>
                <a
                  href="#"
                  className="font-inter inline-flex h-[52px] items-center justify-center gap-2 rounded-lg border border-white/16 bg-[#111116] px-6 text-sm text-white transition hover:border-[#C2384F] hover:text-[#ff5c8f]"
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
