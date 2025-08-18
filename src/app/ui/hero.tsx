export default function Hero() {
  return (
    <div className="p-20 flex h-[50vh] justify-center flex-col gap-40">
      <div className="text-6xl flex h-min self-center">
        Find a perfect receipt
      </div>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for anything..."
        className="text-xl flex h-min self-center bg-white rounded-lg py-5 px-10 placeholder:text-gray-500 placeholder:text-base focus:outline-none"
      />
    </div>
  );
}
