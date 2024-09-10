import React from 'react';

function CommentSection({ comments }) {
  return (
    <div>
      <div className="relative">
        <input
          className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
          type="text" placeholder="Write a comment"
        />
        {/* Add comment input icons */}
      </div>

      <div className="pt-6">
        {comments.map((comment, index) => (
          <div key={index} className="media flex pb-4">
            <a className="mr-4" href="#">
              <img className="rounded-full max-w-none w-12 h-12" src={`https://randomuser.me/api/portraits/men/${index + 80}.jpg`} alt={comment.author} />
            </a>
            <div className="media-body">
              <div>
                <a className="inline-block text-base font-bold mr-2" href="#">{comment.author}</a>
                <span className="text-slate-500">{comment.time}</span>
              </div>
              <p>{comment.content}</p>
              <div className="mt-2 flex items-center">
                <a className="inline-flex items-center py-2 mr-3" href="#">
                  <span className="mr-2">
                    <svg className="fill-rose-600" style={{width: '22px', height: '22px'}} viewBox="0 0 24 24">
                      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg>
                  </span>
                  <span className="text-base font-bold">{comment.likes}</span>
                </a>
                <button className="py-2 px-4 font-medium hover:bg-slate-50 rounded-lg">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="w-full">
          <a href="#" className="py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75">
            Show more comments
          </a>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
