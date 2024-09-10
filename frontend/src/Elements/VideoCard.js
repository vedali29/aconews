import React from 'react';

const VideoCard = () => {

    const NewsItem = ({ title, content }) => {
        return (
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{content}</p>
          </div>
        );
      }; 

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-200 rounded-2xl">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Video Card Section */}
        <div className="lg:w-1/2">
          <div className="rounded-lg shadow-lg bg-white max-w-lg mx-auto">
            <a href="#!">
              <video width="320" height="240" controls className="w-full rounded-t-lg">
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Video Card</h5>
              <p className="text-gray-700 text-base mb-4">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
              <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Button
              </button>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Latest News</h2>
            <div className="space-y-4">
              <NewsItem 
                title="Breaking News: Important Event Occurs"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
              <NewsItem 
                title="Technology Update: New Gadget Released"
                content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
              <NewsItem 
                title="Sports: Local Team Wins Championship"
                content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
              <NewsItem 
                title="Finance: Stocks Prices"
                content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
