import React from 'react';
import CommentSection from './CommentSection';

function Cards({ author, date, title, content, likes, images, comments }) {
  return (
    <article className="mb-4 break-inside p-6 rounded-xl bg-white flex flex-col bg-clip-border">
      <div className="flex pb-6 items-center justify-between">
        <div className="flex">
          <a className="inline-block mr-4" href="#">
            <img className="rounded-full max-w-none w-12 h-12" src={author.image} alt={author.name} />
          </a>
          <div className="flex flex-col">
            <div>
              <a className="inline-block text-lg font-bold" href="#">{author.name}</a>
            </div>
            <div className="text-slate-500">
              {date}
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-extrabold">
        {title}
      </h2>

      <div className="py-4">
        {/* Add image gallery component here */}
      </div>

      <p>{content}</p>

      <div className="py-4">
        <a className="inline-flex items-center" href="#">
          <span className="mr-2">
            <svg className="fill-rose-600" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
            </svg>
          </span>
          <span className="text-lg font-bold">{likes}</span>
        </a>
      </div>

      <CommentSection comments={comments} />
    </article>
  );
}

export default Cards;
