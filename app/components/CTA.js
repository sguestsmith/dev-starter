import { GlobeAmericasIcon } from "@heroicons/react/20/solid";
export default function CTA() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <dt className="flex items-center gap-x-3 text-base font-semibold text-gray-900 justify-center">
            <GlobeAmericasIcon
              className="h-10 w-10 flex-none text-cyan-600"
              aria-hidden="true"
            />
          </dt>

          <h5 class="mt-8 text-2xl font-bold text-center tracking-widest text-neutral-700  tracking-wide">
          WHY CHOOSE COMPASS?
          </h5>

          <p class="mx-5 mt-8 font-normal text-left leading-8 text-gray-700">
            Within easy reach of Victoria, Port Renfrew is welcoming,
            affordable, and wild as you like. Here, you live through your
            senses: Cedar. Sea spray. Wood smoke. You move with the seasons,
            currents and tides.
            <br></br><br></br>
            This is your gateway to ancient forests, epic hikes, and mighty surf
            — from eagles and Chinook salmon to Sitka spruce and giant Douglas
            fir. From here, you can trek, paddle, comb the beaches, or cast your
            line.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="rounded-md  px-8 py-4 text-md tracking-widest uppercase font-bold text-cyan-600 shadow-sm ring-2 ring-inset ring-cyan-600 hover:text-white hover:bg-cyan-600"
            >
              Button text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
