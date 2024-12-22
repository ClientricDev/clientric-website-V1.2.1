import { motion } from 'framer-motion';
import YouTube from 'react-youtube';
import Button from './common/Button';
import { generateVideoSchema } from '../utils/structuredData';
import Head from 'next/head';

export default function Hero() {
  const videoOpts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      origin: typeof window !== 'undefined' ? window.location.origin : '',
    },
  };

  const videoId = "SvdZZkt37w4";
  const videoTitle = "Clientric CRM Solutions Overview";
  const videoDescription = "Learn how Clientric helps construction and trades businesses transform their operations with practical technology solutions.";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      <Head>
        {/* Open Graph Video Tags */}
        <meta property="og:video" content={`https://www.youtube.com/watch?v=${videoId}`} />
        <meta property="og:video:secure_url" content={`https://www.youtube.com/watch?v=${videoId}`} />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta property="og:video:url" content={`https://www.youtube.com/watch?v=${videoId}`} />
        <meta property="og:video:thumbnail" content={thumbnailUrl} />
        
        {/* JSON-LD for Video */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateVideoSchema(videoId, videoTitle, videoDescription, thumbnailUrl))
          }}
        />
      </Head>
      <section 
        className="relative min-h-screen gradient-bg text-white -mt-20 pt-20"
        role="banner"
        aria-labelledby="hero-heading"
      >
      <div className="absolute inset-0 hero-overlay" aria-hidden="true"></div>
      
      <div className="relative container mx-auto px-4 pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 
            id="hero-heading"
            className="text-4xl md:text-6xl font-bold mb-6 text-accent-yellow" 
            itemProp="headline"
          >
            Your Tech Doesn't Suck—You Just Need To Master It
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white" itemProp="description">
            Stop wrestling with disconnected systems and start dominating your market
          </p>

          <div 
            className="max-w-2xl mx-auto mb-12 rounded-lg overflow-hidden shadow-2xl"
            role="presentation"
          >
            <YouTube
              videoId={videoId}
              opts={videoOpts}
              className="w-full aspect-video"
              onError={(error) => console.error('YouTube Error:', error)}
              title={videoTitle}
            />
          </div>

          <Button href="/contact" className="text-xl relative z-20">
            Book Your Free Consultation
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
      </section>
    </>
  );
}