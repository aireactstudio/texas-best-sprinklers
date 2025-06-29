'use client';

import React, { useState } from 'react';
import ImageModal from '@/components/ImageModal';

export default function DebugImagesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const openModal = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setModalOpen(true);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageUrl.trim()) {
      openModal(imageUrl);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        openModal(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Sample images for testing
  const sampleImages = [
    'https://picsum.photos/800/600?random=1',
    'https://picsum.photos/1200/800?random=2',
    'https://picsum.photos/400/300?random=3',
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Debug Tool</h1>
        
        {/* URL Input */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Image URL</h2>
          <form onSubmit={handleUrlSubmit} className="flex gap-4">
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Paste image URL here..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View in Modal
            </button>
          </form>
        </div>

        {/* File Upload */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Upload Local Image</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Sample Images */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Sample Test Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sampleImages.map((src, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`Sample ${index + 1}`}
                  className="w-full h-40 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openModal(src)}
                />
                <div className="p-3">
                  <button
                    onClick={() => openModal(src)}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    View in Modal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Image URL Display */}
        {currentImage && (
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-xl font-semibold mb-2">Current Image URL:</h2>
            <p className="text-sm text-gray-600 break-all font-mono bg-gray-100 p-2 rounded">
              {currentImage}
            </p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        imageSrc={currentImage}
        imageAlt="Debug Image"
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
