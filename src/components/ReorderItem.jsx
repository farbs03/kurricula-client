import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { useRaisedShadow } from "../utils/useRaisedShadow";

const ReorderItem = ({item, children}) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item value={item.title} id={item.title} style={{ boxShadow, y }}>
      {children}
    </Reorder.Item>
  );
};

export default ReorderItem