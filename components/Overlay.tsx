import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function Overlay({
  visible = false,
  z: zIndex = 5,
  onClick,
}: {
  visible?: boolean;
  z?: number;
  onClick?: () => void;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="h-dvh w-dvw bg-black/40 backdrop-blur-xs fixed inset-0"
          style={{ zIndex }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClick}
        />
      )}
    </AnimatePresence>
  );
}

export default Overlay;
