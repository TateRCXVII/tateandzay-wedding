// components/RegistryCard.tsx
import React from 'react';

interface RegistryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  registryUrl: string;
}

const RegistryCard: React.FC<RegistryCardProps> = ({ title, description, imageUrl, registryUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 sm:p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <img className="w-full h-48 object-cover mb-4 rounded-md" src={imageUrl} alt={title} />
      <p className="mb-4">{description}</p>
      <a
        href={registryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black font-sans text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-200"
      >
        Visit Registry
      </a>
    </div>
  );
};

export default RegistryCard;
