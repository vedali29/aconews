import React from 'react';

const NewsGrid = () => {
  const mainArticle = {
    image: "https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1",
    category: "Election",
    title: "Revenge of the Never Trumpers",
    description: "Meet the Republican dissidents fighting to push Donald Trump out of office—and reclaim their party"
  };

  const sideArticles = [
    {
      image: "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1",
      title: "Trump Steps Back Into Coronavirus Spotlight"
    },
    {
      image: "https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&w=364&h=204&crop=1",
      title: "How Trump's Mistakes Became Biden's Big Breaks"
    },
    {
      image: "https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&w=364&h=204&crop=1",
      title: "Survey: Many Americans 'Dissatisfied' With U.S."
    },
    {
      image: "https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&w=364&h=204&crop=1",
      title: "How Trump's Mistakes Became Biden's Big Breaks"
    },
    {
      image: "https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&w=364&h=204&crop=1",
      title: "Survey: Many Americans 'Dissatisfied' With U.S."
    },
    {
      image: "https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1",
      title: "Trump Steps Back Into Coronavirus Spotlight"
    }
  ];

  return (
    <div className="max-w-screen-3xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
        <div className="sm:col-span-5">
          <a href="#">
            <div className="bg-cover text-center overflow-hidden"
              style={{minHeight: "300px", backgroundImage: `url('${mainArticle.image}')`}}
              title="Woman holding a mug">
            </div>
          </a>
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div>
              <a href="#"
                className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                {mainArticle.category}
              </a>
              <a href="#"
                className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                {mainArticle.title}
              </a>
              <p className="text-gray-700 text-base mt-2">{mainArticle.description}</p>
            </div>
          </div>
        </div>

        <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
          {sideArticles.map((article, index) => (
            <div key={index} className="">
              <a href="#">
                <div className="h-40 bg-cover text-center overflow-hidden"
                  style={{backgroundImage: `url('${article.image}')`}}
                  title="Woman holding a mug">
                </div>
              </a>
              <a href="#"
                className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                {article.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
