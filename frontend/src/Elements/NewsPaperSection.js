import React from 'react';
import './NewsPaperSection.css'

const NewsPaperSection = () => {
  return (
    <div className="font-serif text-sm text-white bg-black m-6 rounded-lg min-h-screen p-4">
      <div className="head text-center relative mb-6">
        <div className="headerobjectswrapper">
          <header className="font-playfair font-black uppercase inline-block leading-tight pt-5 text-[10vw] md:text-[5vw] lg:text-[80px]">AcoNews</header>
        </div>
        <div className="subhead uppercase border-b-2 border-t-2 border-[#2f2f2f] py-3 mb-4 text-base md:text-lg">York, MA - Thursday August 30, 1978 - Seven Pages</div>
      </div>
      <div className="content text-[0] leading-[0] word-spacing-[-0.31em] inline-block m-[30px_2%_0_2%]">
        <div className="collumns ml-20 mb-4 text-base md:text-lg">
          {/* Column 1 */}
          <div className="collumn text-[14px] leading-[20px] w-[17.5%] inline-block p-[0_1%] align-top mb-[50px] transition-all duration-700 border-l first:border-l-0 border-[#2f2f2f]">
            <div className="head">
              <span className="headline hl3 text-center leading-normal font-playfair block mx-auto font-normal italic text-[36px] box-border py-[10px]">When darkness overspreads my eyes</span>
              <p><span className="headline hl4 text-center leading-normal font-playfair block mx-auto font-bold text-[12px] box-border py-[10px] before:border-t before:border-[#2f2f2f] before:content-[''] before:w-[100px] before:h-[7px] before:block before:mx-auto after:border-b after:border-[#2f2f2f] after:content-[''] after:w-[100px] after:h-[10px] after:block after:mx-auto">by JOHANN WOLFGANG VON GOETHE</span></p>
            </div>
            <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream;</p>
            {/* ... rest of the content ... */}
          </div>
          {/* Repeat similar structure for other columns */}
          <div className="collumn text-[14px] leading-[20px] w-[17.5%] inline-block p-[0_1%] align-top mb-[50px] transition-all duration-700 border-l first:border-l-0 border-[#2f2f2f]">
            <div className="head">
              <span className="headline hl3 text-center leading-normal font-playfair block mx-auto font-normal italic text-[36px] box-border py-[10px]">May the Force be with you</span>
              <p><span className="headline hl4 text-center leading-normal font-playfair block mx-auto font-bold text-[12px] box-border py-[10px] before:border-t before:border-[#2f2f2f] before:content-[''] before:w-[100px] before:h-[7px] before:block before:mx-auto after:border-b after:border-[#2f2f2f] after:content-[''] after:w-[100px] after:h-[10px] after:block after:mx-auto">by JOHANN WOLFGANG VON GOETHE</span></p>
            </div>
            <p> The sunset faded to twilight before anything further happened.  The crowd far away on the left, towards Woking, seemed to grow, and I heard now a faint murmur from it.  The little knot of people towards Chobham dispersed.  There was scarcely an intimation of movement from the pit.</p>
            <img src='http://i.giphy.com/PW7MoTD2d9pJK.gif'></img>
            {/* ... rest of the content ... */}
            <p>It was this, as much as anything,s from Woking also helped to restore confidence.  At any rate, as the dusk came on a slow, intermittent movement upon the sand pits began, a movement that seemed to gather force as the stillness of the evening about the cylinder remained unbroken.  Vertical black figures in twos and threes would advance, stop, watch, and advance again, spreading out as they did so in a thin irregular crescent that promised to enclose the pit in its attenuated horns.  I, too, on my side began to move towards the pit.</p>
          </div>

          <div className="collumn text-[14px] leading-[20px] w-[17.5%] inline-block p-[0_1%] align-top mb-[50px] transition-all duration-700 border-l first:border-l-0 border-[#2f2f2f]">
            <div className="head">
              <span className="headline hl3 text-center leading-normal font-playfair block mx-auto font-normal italic text-[36px] box-border py-[10px]">It wasn't a dream </span><span class="headline hl4">by FRANZ KAFKA</span>
              <p><span className="headline hl4 text-center leading-normal font-playfair block mx-auto font-bold text-[12px] box-border py-[10px] before:border-t before:border-[#2f2f2f] before:content-[''] before:w-[100px] before:h-[7px] before:block before:mx-auto after:border-b after:border-[#2f2f2f] after:content-[''] after:w-[100px] after:h-[10px] after:block after:mx-auto">by JOHANN WOLFGANG VON GOETHE</span></p>
            </div>
            <p>His many legs, pitifully thin compared with the size of the rest of him, <strong>waved about helplessly as he looked</strong>. "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.</p>
            {/* ... rest of the content ... */}
          </div>

          <div className="collumn text-[14px] leading-[20px] w-[17.5%] inline-block p-[0_1%] align-top mb-[50px] transition-all duration-700 border-l first:border-l-0 border-[#2f2f2f]">
            <div className="head">
              <span className="headline hl3 text-center leading-normal font-playfair block mx-auto font-normal italic text-[36px] box-border py-[10px]">Let go your conscious self and act on </span>
              <p><span className="headline hl4 text-center leading-normal font-playfair block mx-auto font-bold text-[12px] box-border py-[10px] before:border-t before:border-[#2f2f2f] before:content-[''] before:w-[100px] before:h-[7px] before:block before:mx-auto after:border-b after:border-[#2f2f2f] after:content-[''] after:w-[100px] after:h-[10px] after:block after:mx-auto">by JOHANN WOLFGANG VON GOETHE</span></p>
            </div>
            <p>Partially, but it also obeys your commands. Hey, Luke! May the Force be with you. I have traced the Rebel spies to her. Now she is my only link to finding their secret base., and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream;</p>
            {/* ... rest of the content ... */}
            <img src='http://i.giphy.com/4fDWVPMoSyhgc.gif'></img>
          </div>

          <div className="collumn text-[14px] leading-[20px] w-[17.5%] inline-block p-[0_1%] align-top mb-[50px] transition-all duration-700 border-l first:border-l-0 border-[#2f2f2f]">
            <div className="head">
              <span className="headline hl3 text-center leading-normal font-playfair block mx-auto font-normal italic text-[36px] box-border py-[10px]">"This time, let go your conscious self and act on instinct."</span>
              <p><span className="headline hl4 text-center leading-normal font-playfair block mx-auto font-bold text-[12px] box-border py-[10px] before:border-t before:border-[#2f2f2f] before:content-[''] before:w-[100px] before:h-[7px] before:block before:mx-auto after:border-b after:border-[#2f2f2f] after:content-[''] after:w-[100px] after:h-[10px] after:block after:mx-auto">by JOHANN WOLFGANG VON GOETHE</span></p>
            </div>
            <p>Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. <span class="citation">"Don't under&shy;estimate the Force. I suggest you try it again, Luke."</span> This time, let go your conscious self and act on instinct. In my experience, there is no such thing as luck. You're all clear, kid. Let's blow this thing and go home!</p>
            {/* ... rest of the content ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPaperSection;
