import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface AmbientAudioProps {
  onSoundStateChange?: (isPlaying: boolean) => void;
}

export const AmbientAudio: React.FC<AmbientAudioProps> = ({ onSoundStateChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);

  const toggleSound = () => {
    if (!isPlaying) {
      startAmbientSound();
      setIsPlaying(true);
      if (onSoundStateChange) onSoundStateChange(true);
    } else {
      stopAmbientSound();
      setIsPlaying(false);
      if (onSoundStateChange) onSoundStateChange(false);
    }
  };

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350, ctx.currentTime);

      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.setValueAtTime(0.18, ctx.currentTime);

      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(250, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(0.01, ctx.currentTime);
      mainGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2.5);

      whiteNoise.connect(filter);
      filter.connect(mainGain);
      mainGain.connect(ctx.destination);

      whiteNoise.start();
      lfo.start();

      noiseNodeRef.current = whiteNoise;
      gainNodeRef.current = mainGain;
      lfoRef.current = lfo;
    } catch (e) {
      console.warn('Web Audio API not supported:', e);
    }
  };

  const stopAmbientSound = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);
      setTimeout(() => {
        audioCtxRef.current?.close();
        audioCtxRef.current = null;
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      data-cursor={isPlaying ? 'MUTE' : 'AUDIO'}
      className={`relative group flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-500 ${
        isPlaying
          ? 'bg-[#00F5D4]/15 border-[#00F5D4] text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.3)]'
          : 'bg-[#241610]/80 border-[#ECE5D8]/20 text-[#ECE5D8]/70 hover:border-[#00F5D4]/50 hover:text-[#00F5D4]'
      }`}
      title={isPlaying ? 'Mudar áudio' : 'Ouvir ambiente solar'}
    >
      <div className="relative flex items-center justify-center">
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#00F5D4] animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4" />
        )}
      </div>

      <span className="text-xs font-semibold tracking-wider uppercase font-syne hidden sm:inline-block">
        {isPlaying ? 'Áudio Ativo' : 'Áudio Solar'}
      </span>

      {isPlaying && (
        <div className="flex items-center gap-0.5 h-3 ml-0.5">
          <motion.span
            animate={{ height: ['20%', '100%', '30%'] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
            className="w-0.5 bg-[#00F5D4] rounded-full"
          />
          <motion.span
            animate={{ height: ['60%', '20%', '90%'] }}
            transition={{ repeat: Infinity, duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
            className="w-0.5 bg-[#00F5D4] rounded-full"
          />
          <motion.span
            animate={{ height: ['40%', '80%', '20%'] }}
            transition={{ repeat: Infinity, duration: 0.7, ease: 'easeInOut', delay: 0.1 }}
            className="w-0.5 bg-[#00F5D4] rounded-full"
          />
        </div>
      )}
    </button>
  );
};
