import { FC } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type AnimatedShieldIconProps = {
  success: boolean;
};

const AnimatedShieldIcon: FC<AnimatedShieldIconProps> = ({ success }) => {
  return (
    <>
      <AnimatePresence>
        {!success && (
          <motion.div
            initial={false}
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.2 }}
            variants={{
              animateState: {
                opacity: 1,
                position: 'static',
              },
              exitState: {
                opacity: 0,
                rotate: 180,
                position: 'absolute',
              },
            }}
          >
            <Image
              src="/icons/shield.svg"
              alt="Form header icon"
              style={{ objectFit: 'contain' }}
              width={100}
              height={100}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {success && (
        <motion.div
          initial="initialState"
          animate="animateState"
          transition={{ duration: 0.55 }}
          variants={{
            initialState: {
              rotate: 180,
              position: 'absolute',
              opacity: 0,
            },
            animateState: {
              opacity: 1,
              rotate: 360,
              position: 'static',
            },
          }}
        >
          <Image
            src="/icons/otp_success.svg"
            alt="Form header icon"
            style={{ objectFit: 'contain' }}
            width={100}
            height={100}
          />
        </motion.div>
      )}
    </>
  );
};

export default AnimatedShieldIcon;
