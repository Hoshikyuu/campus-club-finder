import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { clubs } from '../data/clubs';

export default function ClubDetail() {
  const { clubId } = useParams<{ clubId: string }>();
  const club = clubs.find((c) => c.id === clubId);

  const [joined, setJoined] = useState(false);

  useEffect(() => {
    if (clubId) {
      const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
      setJoined(joinedClubs.includes(clubId));
    }
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    if (!joinedClubs.includes(clubId)) {
      joinedClubs.push(clubId);
      localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
      setJoined(true);
    }
  };

  if (!club) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Club Not Found</h2>
        <Link to="/clubs" className="text-blue-600 underline">Back to Clubs</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <img
        src={club.image}
        alt={club.name}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{club.name}</h1>
      <p className="mb-6 text-gray-700">{club.description}</p>
      <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
      <ul className="mb-6">
        {club.events.map((event, idx) => (
          <li key={idx} className="mb-2">
            <span className="font-medium">{event.name}</span> &mdash;{' '}
            <span className="text-gray-600">{event.date}</span>
          </li>
        ))}
      </ul>
      {!joined ? (
        <button
          onClick={handleJoin}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Join Club
        </button>
      ) : (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded font-semibold inline-block">
          You have joined this club!
        </div>
      )}
      <div className="mt-8">
        <Link to="/clubs" className="text-blue-600 underline">← Back to Clubs</Link>
      </div>
    </div>
  );
}