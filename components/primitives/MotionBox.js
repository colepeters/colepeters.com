import { motion } from 'framer-motion'

import Box from './Box'

const MotionBox = motion.custom(Box)
MotionBox.displayName = 'MotionBox'

export default MotionBox
