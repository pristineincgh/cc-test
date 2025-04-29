'use client';

import { Container, ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Container loaded:', container);
    return Promise.resolve();
  };

  const options: ISourceOptions = useMemo(
    () => ({
      key: 'nasa',
      name: 'NASA',
      background: {
        color: {
          value: 'transparent',
        },
      },
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
          },
        },
        color: {
          value: '#0080ff',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: {
            min: 0.1,
            max: 1,
          },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
        move: {
          enable: true,
          speed: {
            min: 0.1,
            max: 1,
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'bubble',
          },
          onClick: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
    );
  }

  return <></>;
};
export default ParticlesBackground;
