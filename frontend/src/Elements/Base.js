import React from 'react';

const Base = () => {
  return (
    <div className='flex flex-row gap-4 m-4'>
    <div className="flex flex-col md:flex-row bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
    <div className="md:w-1/2 xl:w-1/3 p-6 md:p-8 lg:p-10">
      <img className="w-full h-full object-cover" src="https://1079614922.rsc.cdn77.org/data/images/full/173106/66-jeremy-renner.jpg?w=700" alt="profile-picture" />
    </div>
    <div className="md:w-1/2 xl:w-2/3 p-6 md:p-8 lg:p-10">
      <h4 className="mb-1 text-xl font-semibold text-slate-800">
        Natalie Paisley
      </h4>
      <p className="text-sm font-semibold text-slate-500 uppercase">
       Actor 
      </p>
      <p className="text-base text-slate-600 mt-4 font-light ">
      Overall purpose of role: o Work on projects & tech on developing highly scalable application o Design and develop Micro services, GUI, Server components o Implement Functional solutions, unit test & coordinate releases and where applicable contribute to design sessions. o Interact with end users & product owner to understand their requirements and build solution pertaining to that. o Work as a part of a local team and liaise regularly with colleagues in other regions. o Provide support to for the applications BAU work as needed. 
      </p>
      <div className="mt-8">
        <h5 className="text-lg font-semibold text-slate-800">
          JSC GELODS
        </h5>
        {/* <p className="text-base text-slate-600 font-light">
        Key Accountabilities and Skills required: o Strong application & development skills, including multi-threaded programming and SQL experience. o Ability to effectively communicate with end-users and other developers in a global, team-based environment o Strong inter-personal skills with ability to communicate thoughts, designs, and implementations in both written and verbal form o Results-oriented, self-starter with positive "can-do" attitude where you can enjoy the main night life in Barcelona.ve to travel and try new foods.
        </p> */}
      </div>
      <div className="mt-8">
        {/* <h5 className="text-lg font-semibold text-slate-800">
          Skills
        </h5> */}
        <ul className="list-none mb-0">
          <li className="text-base text-slate-600 font-light">Avengers</li>
          <li className="text-base text-slate-600 font-light">Potion of motion</li>
          <li className="text-base text-slate-600 font-light">Market of dolls</li>
        </ul>
      </div>
      <div className="mt-8">
        <button className="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Follow for more news
        </button>
      </div>
    </div>
  </div>


  <div className="flex flex-col md:flex-row bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
    <div className="md:w-1/2 xl:w-1/3 p-6 md:p-8 lg:p-10">
      <img className="w-full h-full object-cover" src="https://beardstyle.net/wp-content/uploads/2023/05/British-English-Actor-Benedict-Cumberbatch-with-Beard.jpg" alt="profile-picture" />
    </div>
    <div className="md:w-1/2 xl:w-2/3 p-6 md:p-8 lg:p-10">
      <h4 className="mb-1 text-xl font-semibold text-slate-800">
        Antalia Mohanish
      </h4>
      <p className="text-sm font-semibold text-slate-500 uppercase">
        Actor
      </p>
      <p className="text-base text-slate-600 mt-4 font-light ">
      Overall purpose of role: o Work on projects & tech on developing highly scalable application o Design and develop Micro services, GUI, Server components o Implement Functional solutions, unit test & coordinate releases and where applicable contribute to design sessions. o Interact with end users & product owner to understand their requirements and build solution pertaining to that. o Work as a part of a local team and liaise regularly with colleagues in other regions. o Provide support to for the applications BAU work as needed. 
      </p>
      <div className="mt-8">
        <h5 className="text-lg font-semibold text-slate-800">
          JSC GELODS
        </h5>
        {/* <p className="text-base text-slate-600 font-light">
        Key Accountabilities and Skills required: o Strong application & development skills, including multi-threaded programming and SQL experience. o Ability to effectively communicate with end-users and other developers in a global, team-based environment o Strong inter-personal skills with ability to communicate thoughts, designs, and implementations in both written and verbal form o Results-oriented, self-starter with positive "can-do" attitude where you can enjoy the main night life in Barcelona.ve to travel and try new foods.
        </p> */}
      </div>
      <div className="mt-8">
        {/* <h5 className="text-lg font-semibold text-slate-800">
          Skills
        </h5> */}
        <ul className="list-none mb-0">
          <li className="text-base text-slate-600 font-light">Avengers</li>
          <li className="text-base text-slate-600 font-light">Potion of motion</li>
          <li className="text-base text-slate-600 font-light">Market of dolls</li>
        </ul>
      </div>
      <div className="mt-8">
        <button className="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Follow for more news
        </button>
      </div>
    </div>
  </div>


   
  </div>

  );
}

export default Base;