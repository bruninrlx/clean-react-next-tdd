import React, {type EffectCallback, useEffect, useRef} from "react";

const useMount = (effect: EffectCallback) => {
    const mounted = useRef(false);
  
    useEffect(() => {
      if (mounted.current) {
        return effect();
      }
  
      mounted.current = true;
  
      return () => {};
    }, [mounted, effect]);
  };

export default useMount;
