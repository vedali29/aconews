import React from 'react';
import Card from './Cards'


function DisplayCards() {
  return (
    <>
    <div className="text-black bg-black m-12 rounded-lg min-h-screen flex flex-col items-center">
      {/* Wrapper for centering */}
      <div className="container mx-auto py-10">
        {/* Adjust grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            author={{name: "Wade Warren", image: "https://randomuser.me/api/portraits/men/35.jpg"}}
            date="July 17, 2018"
            title="Web Design templates Selection"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            likes={34}
            images={[
              "https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ]}
            comments={[
              {author: "Leslie Alexander", content: "Lorem ipsum dolor sit amet, consectetur.", likes: 12, time: "25 minutes ago"},
              {author: "Tina Mills", content: "Dolor sit ameteiusmod consectetur adipiscing elit.", likes: 0, time: "3 minutes ago"}
            ]}
          />

          {/* Add more cards as necessary */}
          <Card
            author={{name: "Kacy Petercen", image: "https://randomuser.me/api/portraits/men/33.jpg"}}
            date="June 29, 2020"
            title="Material Architect"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            likes={34}
            images={[
              "https://images.pexels.com/photos/2128028/pexels-photo-2128028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ]}
            comments={[
              {author: "Cassie Gaberial", content: "Lorem ipsum dolor sit amet, consectetur.", likes: 78, time: "34 minutes ago"},
              {author: "Millie bob", content: "Dolor sit ameteiusmod consectetur adipiscing elit.", likes: 0, time: "1 minutes ago"}
            ]}
          />
          
          {/* Repeat more cards if necessary */}

          <Card
            author={{name: "Master City", image: "https://randomuser.me/api/portraits/men/9.jpg"}}
            date="Jan 17, 2024"
            title="Election in the system"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            likes={34}
            images={[
              "https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              "https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ]}
            comments={[
              {author: "Leslie Marcles", content: "Lorem ipsum dolor sit amet, consectetur.", likes: 56, time: "90 minutes ago"},
              {author: "Selet partern", content: "Dolor sit ameteiusmod consectetur adipiscing elit.", likes: 1, time: "8 minutes ago"}
            ]}
          />

        </div>
      </div>
    </div>
    </>
  );
}

export default DisplayCards;


