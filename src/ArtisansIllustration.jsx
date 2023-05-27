import React, { useRef } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const styles = {
  trust: {
    backgroundColor: '#425B59',
    borderRadius: '50%',
    width: '300px',
    height: '300px',
    transform: 'translate(-50%, -50%)',
    zIndex: '-1',
    opacity: 0,
    transition: 'opacity 1s'
  },
  person: {
    backgroundColor: '#CBA029',
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    transform: 'translate(-50%, -50%)',
    opacity: 0,
    transition: 'opacity 1s'
  }
};

function ArtisansIllustration() {
  const personRef = useRef(null);
  const trustRef = useRef(null);

  const onEnterViewport = (ref) => {
    ref.current.style.opacity = 1;
  };

  const onExitViewport = (ref) => {
    ref.current.style.opacity = 0;
  };

  return (
    <div style={{ position: 'relative' }}>
      <ScrollTrigger onEnter={() => onEnterViewport(personRef)} onExit={() => onExitViewport(personRef)}>
        <div ref={personRef} style={styles.person}></div>
      </ScrollTrigger>
      <ScrollTrigger onEnter={() => onEnterViewport(trustRef)} onExit={() => onExitViewport(trustRef)}>
        <div ref={trustRef} style={styles.trust}></div>
      </ScrollTrigger>
    </div>
  );
}

export default ArtisansIllustration;
