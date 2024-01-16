import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => (
    <>
      <motion.div className="slide-in"
        initial={{ scaleX: 0,  }}
        animate={{ scaleX: 0,  }}
        exit={{ scaleX: 1,  }}
        transition={{ duration: 1.5, ease: [0.3, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          background: 'white',
          transformOrigin: 'Left',
          zIndex:99
        }}
      />
      <OgComponent />
      <motion.div className="slide-out"
        initial={{ scaleX: 1,  }}
        animate={{ scaleX: 0,  }}
        exit={{ scaleX: 0,  }}
        transition={{ duration:1.5, ease: [0.3, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          background: 'white',
          transformOrigin: 'Right',
          zIndex:99
        }}
      />
    </>
  );
};

export default transition;
