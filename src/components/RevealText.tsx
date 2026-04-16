import { fadeIn } from '@/animations';
import { motion } from 'motion/react';
import Cursor from './Cursor';

export function RevealText({ text }: { text: string }) {
  const words = text.trim().split(/\s+/);

  return (
    <p className='text-left'>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={fadeIn}
        >
          {word}{' '}
        </motion.span>
      ))}
      <motion.span className='inline-block' variants={fadeIn}>
        <Cursor />
      </motion.span>
    </p>
  );
}
