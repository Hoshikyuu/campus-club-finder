import { useState } from 'react';
import { clubs } from '../data/clubs';
import ClubCard from '../components/ClubCard';

export default function Clubs() {
  const [sort, setSort] = useState<'az' | 'za'>('az');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  // Sort clubs by name
  const sortedClubs = [...clubs].sort((a, b) => {
    if (sort === 'az') return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Student Clubs</h1>
        <div className="flex gap-4">
          {/* Sorting */}
          <select
            className="border rounded px-2 py-1"
            value={sort}
            onChange={e => setSort(e.target.value as 'az' | 'za')}
          >
            <option value="az">Name A-Z</option>
            <option value="za">Name Z-A</option>
          </select>
          {/* View Toggle */}
          <button
            className={`px-3 py-1 rounded ${view === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('grid')}
          >
            Grid
          </button>
          <button
            className={`px-3 py-1 rounded ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('list')}
          >
            List
          </button>
        </div>
      </div>
      <div className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
        {sortedClubs.map(club => (
          <ClubCard key={club.id} club={club} view={view} />
        ))}
      </div>
    </div>
  );
}