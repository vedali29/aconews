import React from 'react';

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600", alt: "Photo by Minh Pham", label: "VR", span: 1 },
    { src: "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000", alt: "Photo by Magicle", label: "Tech", span: 2 },
    { src: "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000", alt: "Photo by Martin Sanchez", label: "Dev", span: 2 },
    { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600", alt: "Photo by Lorenzo Herrera", label: "Retro", span: 1 },
  ];

  return (
    <div className="bg-black h-screen h-full m-10 rounded-lg py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>
            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.
            </p>
          </div>
          <a href="#"
            className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
            More
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image, index) => (
            <a key={index} href="#"
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${image.span === 2 ? 'md:col-span-2' : ''}`}>
              <img src={image.src} loading="lazy" alt={image.alt} className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{image.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
