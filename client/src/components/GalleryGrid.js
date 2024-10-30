import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GalleryGrid = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const folderId = process.env.REACT_APP_GOOGLE_DRIVE_FOLDER_ID; // Folder ID from .env
  const apiKey = process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY; // API Key from .env

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id,name,mimeType)&key=${apiKey}`
        );

        console.log(response.data); // Log the response to debug

        // Filter to get image files
        const imageFiles = response.data.files.filter(file =>
          file.mimeType.startsWith('image/')
        );

        // Map to embeddable links
        const imageLinks = imageFiles.map(file => ({
          id: file.id,
          name: file.name,
          url: `https://drive.google.com/uc?id=${file.id}`, // Convert to embeddable link
        }));

        setImages(imageLinks);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [folderId, apiKey]); // Include apiKey in dependencies

  if (loading) return <div className="text-white">Loading images...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black py-8 px-4">
      <h2 className="text-4xl font-semibold mb-10 text-center text-white">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {images.map(image => (
          <div key={image.id} className="rounded-lg overflow-hidden shadow-md">
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
