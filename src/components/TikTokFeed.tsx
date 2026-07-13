import React, { useState } from 'react';
import { Play, Flame, Heart, MessageCircle, Share2, Sparkles, AlertCircle, Send, Check } from 'lucide-react';

export default function TikTokFeed() {
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    'video1': 1420,
    'video2': 842,
    'video3': 2950
  });

  const [hasLiked, setHasLiked] = useState<{ [key: string]: boolean }>({});

  const [comments, setComments] = useState<{ [key: string]: string[] }>({
    'video1': [
      "Best Feyel Tibs in Addis Ababa! Solid 10/10.",
      "The Awaze sauce here has the perfect kick 🌶️🔥",
      "Traditional coffee ceremony at the end is incredible"
    ],
    'video2': [
      "Omgg the melt in your mouth roasted ribs!",
      "Slaughtered fresh daily makes a huge difference.",
      "VIBES ARE IMMACULATE on Bole Road"
    ],
    'video3': [
      "That circular Beyaynetu combination is actual art.",
      "Going with the family this Sunday to get that Ma'ed Platter!",
      "Best place to host business friends or diplomats"
    ]
  });

  const [newComment, setNewComment] = useState('');
  const [commentingOn, setCommentingOn] = useState<string | null>(null);
  const profileAvatarImage = new URL('../assets/images/user_real_storefront_final_1781856959733.jpg', import.meta.url).href;
  const familyFeastImage = new URL('../assets/images/family_feast_1781852341486.jpg', import.meta.url).href;

  const handleLike = (id: string) => {
    if (hasLiked[id]) {
      setLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setHasLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setHasLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleAddComment = (id: string) => {
    if (!newComment.trim()) return;
    setComments(prev => ({
      ...prev,
      [id]: [...prev[id], newComment.trim()]
    }));
    setNewComment('');
  };

  const tiktokPosts = [
    {
      id: 'video1',
      title: 'Pan Sizzling Feyel Tibs Live',
      author: '@teltelefeyelbet',
      views: '45.2K views',
      duration: '0:15',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
      tag: 'TibsSizzle'
    },
    {
      id: 'video2',
      title: 'Our Famous Honey Tej Tasting Ceremony',
      author: '@teltelefeyelbet',
      views: '28.1K views',
      duration: '0:24',
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&auto=format&fit=crop&q=80',
      tag: 'TejHoneyWine'
    },
    {
      id: 'video3',
      title: 'The Mega Family Platter Feast Review',
      author: '@teltelefeyelbet',
      views: '112.5K views',
      duration: '0:58',
      image: familyFeastImage,
      tag: 'EthiopianFoodie'
    }
  ];

  return (
    <section className="relative overflow-hidden w-full border-t border-[#D4AF37]/20 bg-[#070707] py-12 px-4 md:px-6 z-10">
      {/* Decorative Gold & Red circular background highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#C62828]/5 filter blur-[90px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#D4AF37]/5 filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-950/40 border border-red-500/20 text-[#E53935] rounded-full text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span> TikTok Community Highlights
          </div>
          <h3 className="font-serif text-3xl font-bold text-white tracking-wide">
            JOIN THE <span className="text-[#D4AF37]">FEYEL BET MOVEMENT</span>
          </h3>
          <p className="text-xs text-gray-400 mt-2 font-sans tracking-tight">
            Our guests are our family. Watch their viral experiences, check genuine tableside videos, and scan to follow our official page <strong className="text-white">@teltelefeyelbet</strong>.
          </p>
        </div>

        {/* Content Layout: Left QR Follow invite, Right TikTok post grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Premium TikTok follow invitation (4-Cols) */}
          <div className="lg:col-span-4 glass-panel-heavy rounded-3xl p-6 border border-[#D4AF37]/30 text-center flex flex-col justify-between h-full min-h-[400px]">
            <div>
              {/* Fake Tik Tok Profile Header */}
              <div className="relative w-20 h-20 mx-auto rounded-full border-2 border-[#D4AF37] p-1 bg-black">
                <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${profileAvatarImage})` }}></div>
              </div>
              <h4 className="font-serif text-lg font-bold text-white mt-3">Taltale Lounge</h4>
              <p className="text-xs text-[#D4AF37] font-mono tracking-wider">@teltelefeyelbet</p>
              
              {/* Follow Stats */}
              <div className="flex justify-center gap-6 mt-4 text-xs font-mono border-t border-b border-gray-800/80 py-2.5">
                <div>
                  <span className="block font-bold text-white">42.8K</span>
                  <span className="text-[10px] text-gray-500 uppercase">Followers</span>
                </div>
                <div>
                  <span className="block font-bold text-white">850K</span>
                  <span className="text-[10px] text-gray-500 uppercase">Likes Given</span>
                </div>
                <div>
                  <span className="block font-bold text-white">12</span>
                  <span className="text-[10px] text-gray-500 uppercase">Videos</span>
                </div>
              </div>

              {/* Action Button */}
              <a 
                href="https://www.tiktok.com/@teltelefeyelbet"
                target="_blank"
                rel="noreferrer"
                id="tiktok-follow-link"
                className="w-full mt-4 bg-gradient-to-r from-red-600 via-purple-600 to-cyan-500 hover:opacity-95 text-white font-bold py-2 px-4 rounded-full text-xs uppercase tracking-wider block transition-all"
              >
                Follow on TikTok
              </a>
            </div>

            {/* Simulated QR Code for TikTok scan */}
            <div className="mt-6">
              <div className="bg-white p-3 rounded-2xl w-36 h-36 mx-auto flex items-center justify-center shadow-2xl relative">
                {/* QR graphic with TikTok themed cyan/red accent lines inside corner box */}
                <div className="w-full h-full flex flex-col items-center justify-between border-4 border-black p-1">
                  <div className="grid grid-cols-5 gap-1 w-full h-full opacity-90">
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                    <div className="bg-cyan-500"></div>
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                    <div className="bg-white"></div>
                    <div className="bg-black"></div>
                    <div className="bg-red-500"></div>
                    <div className="bg-black"></div>
                    <div className="bg-cyan-500"></div>
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                    <div className="bg-white"></div>
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                    <div className="bg-white"></div>
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                    <div className="bg-cyan-500"></div>
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                    <div className="bg-red-500"></div>
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                  </div>
                </div>
                
                {/* Overlay central logo */}
                <span className="absolute bg-[#0F0F0F] text-[#D4AF37] font-serif font-extrabold text-[10px] tracking-tight px-1.5 py-0.5 rounded border border-[#D4AF37]">
                  TALTELE
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-mono tracking-wide mt-3 leading-tight uppercase">
                Scan with phone camera <br /> to launch tiktok app
              </p>
            </div>

          </div>

          {/* Right Column: Simulated Feed Post Grid (8-Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiktokPosts.map((post) => {
              const isLiked = hasLiked[post.id];
              const commentList = comments[post.id] || [];
              const isCommenting = commentingOn === post.id;
              
              return (
                <div 
                  key={post.id}
                  id={`tiktok-post-${post.id}`}
                  className="bg-[#0D0D0D] rounded-2xl overflow-hidden border border-gray-850 flex flex-col justify-between"
                  style={{ minHeight: '380px' }}
                >
                  {/* Virtual Video Box */}
                  <div className="relative h-44 bg-black overflow-hidden group">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                    {/* Play symbol indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="p-3 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 text-white shadow-xl">
                        <Play className="w-5 h-5 fill-current text-[#D4AF37]" />
                      </span>
                    </div>

                    <span className="absolute bottom-2 left-2 text-[9px] font-mono bg-black/70 py-0.5 px-2 rounded-full text-gray-300">
                      {post.duration}
                    </span>

                    <span className="absolute bottom-2 right-2 text-[9px] font-mono bg-red-600/90 py-0.5 px-2 rounded-full text-white uppercase tracking-wider font-semibold">
                      #{post.tag}
                    </span>
                  </div>

                  {/* Feed Interaction stats and comments */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <p className="text-xs text-white font-serif font-semibold line-clamp-2 leading-snug">
                        {post.title}
                      </p>
                      <span className="text-[10px] text-[#D4AF37] font-mono tracking-tight block mt-1">{post.author}</span>

                      {/* Comments Preview */}
                      <div className="mt-3 space-y-1.5 border-t border-gray-800/80 pt-3">
                        <p className="text-[9px] text-[#D4AF37] uppercase font-mono tracking-widest block font-bold">Lounge Testimonials:</p>
                        {commentList.slice(-2).map((c, ki) => (
                          <p key={ki} className="text-[10px] text-gray-400 font-sans leading-relaxed truncate">
                            💬 &ldquo;{c}&rdquo;
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Social Buttons row */}
                    <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between text-xs font-mono">
                      
                      {/* Like */}
                      <button
                        onClick={() => handleLike(post.id)}
                        id={`btn-tiktok-like-${post.id}`}
                        className={`flex items-center gap-1.5 transition-all ${isLiked ? 'text-red-500 scale-105' : 'text-gray-400 hover:text-white'}`}
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                        <span>{likes[post.id]}</span>
                      </button>

                      {/* Comment */}
                      <button
                        onClick={() => setCommentingOn(isCommenting ? null : post.id)}
                        id={`btn-tiktok-comment-${post.id}`}
                        className={`flex items-center gap-1.5 ${isCommenting ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-white'}`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{commentList.length}</span>
                      </button>

                      {/* Share */}
                      <span className="text-gray-500 flex items-center gap-1">
                        <Share2 className="w-3.5 h-3.5" />
                        <span className="text-[10px]">{post.views}</span>
                      </span>

                    </div>
                  </div>

                  {/* Interactive comment insert board */}
                  {isCommenting && (
                    <div className="bg-black/90 p-3 border-t border-gray-800 flex gap-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Say something about feyel..."
                        id={`tiktok-comment-input-${post.id}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddComment(post.id);
                        }}
                        className="bg-gray-950 text-[10px] border border-gray-800 rounded p-1.5 flex-1 focus:outline-none text-white focus:border-[#D4AF37]"
                      />
                      <button
                        onClick={() => handleAddComment(post.id)}
                        id={`tiktok-comment-submit-${post.id}`}
                        className="bg-[#D4AF37] text-black rounded p-1.5 hover:bg-[#b5952f] transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* Traditional Ethio-Hospitality Promise Badge */}
        <div className="mt-12 bg-black border border-[#D4AF37]/20 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-[#D4AF37]" />
            <div>
              <h5 className="text-xs font-serif font-bold text-white tracking-wider uppercase">Our Quality Slaughters Assurance</h5>
              <p className="text-[10px] text-gray-500 mt-0.5">
                Every single cut of goat served on our circular injeras of Bole Road is guaranteed slaughtered strictly fresh daily in fully certified traditional facilities.
              </p>
            </div>
          </div>
          <p className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">Slaughtered Fresh Daily</p>
        </div>

      </div>
    </section>
  );
}
