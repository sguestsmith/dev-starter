export default function Cards() {
  return (


<div class=" basis-1/4 m-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="" src="/images/private_pool.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mt-4 mb-5 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white tracking-wide">DELUXE KING SUITE</h5>
        </a>
        <p class="mt-8 mb-3 font-normal text-gray-700 dark:text-gray-400">We have accommodations for all lifestyles. Stay in our Seaside Cottages for a luxury waterfront vacation, our Forest View Studio for a private and peaceful stay or enjoy the economical comfort and wilderness view of our West Coast Trail Lodge. Conveniently within walking distance to the Renfrew Pub (open year round) for lunch, dinner and drinks along with The Coastal Kitchen Cafe for breakfast and specialty coffee!</p>
       <div className="flex flex-col items-center mt-8 mb-8">
       <button
        type="button"
        className="center rounded-md bg-cyan-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
      >
        Button text
      </button>
       </div>
       
    </div>
</div>

  );
}
