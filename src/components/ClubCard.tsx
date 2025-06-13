import React from 'react';

interface ClubCardProps {
    name: string;
    image: string;
    description: string;
    onViewDetails: () => void;
}

const ClubCard: React.FC<ClubCardProps> = ({ name, image, description, onViewDetails }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button 
                    onClick={onViewDetails} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ClubCard;