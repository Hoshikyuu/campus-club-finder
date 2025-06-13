import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white">
      <div className="max-w-2xl w-full text-center p-8 rounded-lg shadow-lg bg-white mt-12">
        <img
          src="/images/hero.jpg"
          alt="Campus Clubs"
          className="mx-auto mb-6 rounded-lg shadow-md max-h-56 object-cover"
        />
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800 drop-shadow">
          Welcome to Campus Club Finder!
        </h1>
        <p className="mb-8 text-lg text-gray-700">
          Discover, learn about, and join student clubs at your university. Connect with like-minded peers, attend exciting events, and make the most of your campus life!
        </p>
        <Link
          to="/clubs"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Explore Clubs
        </Link>
      </div>
    </div>
  );
}