import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

export const InstagramShowcase: React.FC = () => {
  const posts = [
    {
      id: 'post-1',
      title: 'Camisa Solar Canoeira',
      caption: 'Proteção UV50+ projetada para o sol e para o treino ao ar livre. ☀️ #usecanoeira',
      likes: '482',
      comments: '34',
      image: '/assets/canoieraBlusa.jpeg',
      tag: '@usecanoeira',
    },
    {
      id: 'post-2',
      title: 'Boné Caiçara Hydro',
      caption: 'Aba antirreflexo e tecido de secagem ultrarrápida. #almasolar',
      likes: '621',
      comments: '58',
      image: '/assets/canoeiraBone.jpeg',
      tag: '@usecanoeira',
    },
    {
      id: 'post-3',
      title: 'Top Activewear Canoeira',
      caption: 'Sustentação anatômica e estilo minimalista elegante. #usecanoeira',
      likes: '890',
      comments: '72',
      image: '/assets/canoeiraTop.jpg',
      tag: '@usecanoeira',
    },
    {
      id: 'post-4',
      title: 'Vestuário & Performance',
      caption: 'O site oficial com a coleção completa está chegando. Acompanhe as novidades!',
      likes: '512',
      comments: '41',
      image: '/assets/canoieraHero.jpeg',
      tag: '@usecanoeira',
    },
  ];

  return (
    <section id="instagram" className="relative py-28 bg-[#19100B] text-[#ECE5D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-syne text-xs uppercase tracking-widest text-[#00F5D4] mb-3">
              <Instagram className="w-4 h-4 text-[#00F5D4]" />
              <span>Siga a Nossa Jornada</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight">
              @usecanoeira <span className="italic text-[#00F5D4]">no Instagram</span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/usecanoeira/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="INSTAGRAM"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#241610] border border-[#00F5D4]/40 text-[#ECE5D8] font-syne text-xs font-bold uppercase tracking-wider hover:bg-[#00F5D4] hover:text-[#19100B] transition-all duration-300 w-fit"
          >
            <span>Seguir no Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Posts Grid with Real Unique Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/usecanoeira/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-cursor="VER NO INSTAGRAM"
              className="group relative rounded-2xl glass-panel border border-[#ECE5D8]/10 overflow-hidden hover:border-[#00F5D4]/50 transition-all duration-500 flex flex-col justify-between p-6 aspect-square"
            >
              {/* Image Background */}
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover:scale-110 group-hover:brightness-90 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19100B] via-[#19100B]/40 to-transparent" />

              {/* Top Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-syne text-xs font-bold text-[#00F5D4] px-2.5 py-1 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#00F5D4]/30">
                  {post.tag}
                </span>
                <div className="p-2 rounded-full bg-[#19100B]/80 backdrop-blur-md border border-[#ECE5D8]/20">
                  <Instagram className="w-4 h-4 text-[#00F5D4]" />
                </div>
              </div>

              {/* Bottom Caption & Stats */}
              <div className="relative z-10 pt-3 border-t border-[#ECE5D8]/20">
                <h4 className="font-serif text-lg text-[#ECE5D8] group-hover:text-[#00F5D4] transition-colors mb-1">
                  {post.title}
                </h4>
                <p className="font-sans text-xs text-[#ECE5D8]/80 line-clamp-1 mb-2 font-light">
                  {post.caption}
                </p>
                <div className="flex items-center gap-4 text-[11px] font-syne text-[#ECE5D8]/80">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-[#00F5D4] fill-[#00F5D4]" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-[#ECE5D8]" /> {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
