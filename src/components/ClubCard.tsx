import { Link } from 'react-router-dom';

export type Club = {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
};

export interface ClubCardProps {
  club: Club;
  view: 'grid' | 'list';
}

export default function ClubCard({ club, view }: ClubCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow p-4 flex ${
        view === 'list' ? 'flex-row items-center gap-4' : 'flex-col'
      }`}
    >
      <img
        src={club.image}
        alt={club.name}
        className={`object-cover rounded ${
          view === 'list' ? 'w-24 h-24' : 'w-full h-40 mb-3'
        }`}
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1">{club.name}</h3>
        <p className="text-gray-600 mb-2">{club.shortDescription}</p>
        <Link
          to={`/clubs/${club.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}