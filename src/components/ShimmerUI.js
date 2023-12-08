import categories from "../utils/videoCategories";

const ShimmerUI = () => {
  return (
    <div className="mt-24 flex flex-wrap gap-5 my-2 px-3">
      {categories.map((category) => (
        <div
          key={category.id}
          className="w-[360px] h-80 cursor-pointer animate-pulse"
        >
          <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
          <section className="flex gap-3 my-2 items-start">
            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
            <div className="w-[80%]">
              <div className=" bg-gray-200 w-full h-5"></div>
              <div className="bg-gray-200 w-20 h-5">
                <div className="mb-1 bg-gray-200 col-span-2"></div>
                <div className="flex gap-1 items-center bg-gray-200 text-xs col-span-2"></div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;
