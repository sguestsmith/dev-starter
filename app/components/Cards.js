export default function Cards() {
  return (


<div class="md:w-4/12 m-5 bg-white border border-gray-200 shadow">
    <a href="#">
        <img class="" src="/images/private_pool.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mt-8 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white tracking-wide">DELUXE KING SUITE</h5>
        </a>
        <p class="mx-5 mt-8 font-normal leading-8 text-gray-700 dark:text-gray-400">We have accommodations for all lifestyles. Stay in our Seaside Cottages for a luxury waterfront vacation, our Forest View Studio for a private and peaceful stay or enjoy the economical comfort and wilderness view of our West Coast Trail Lodge. Conveniently within walking distance to the Renfrew Pub (open year round) for lunch, dinner and drinks along with The Coastal Kitchen Cafe for breakfast and specialty coffee!</p>
       <div className="flex flex-col items-center mt-10 mb-12">
       <button
            type="button"
            className="rounded-md  px-8 py-4 text-md tracking-widest uppercase font-bold text-cyan-600 shadow-sm ring-2 ring-inset ring-cyan-600 hover:text-white hover:bg-cyan-600"
          >
            Button text
          </button>
       </div>
       
    </div>
</div>

  );
}
