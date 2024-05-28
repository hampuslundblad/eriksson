import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 px-4 text-center">
        <h1 className="text-5xl text-white font-bold">Erikssons Snickeri</h1>
        <div className="max-w-xl text-left mx-auto">
          <p className="text-xl text-white">
            Crafting quality woodwork for over three generations, Erikssons
            Snickeri brings the warmth and charm of family-owned craftsmanship
            to your home. Our passion is turning your vision into reality with
            precision and care.
          </p>
        </div>
        <Link href="#contact">
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-colors duration-200">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
