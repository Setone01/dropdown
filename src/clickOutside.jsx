import React, { useState, useRef, useEffect } from "react";

const clickOutside = (WrappedComponent) => {
  const Component = (props) => {
    const [open, setOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      const handleClickOutside = (e) => {
        if (!ref.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return (
        <WrappedComponent open={open} setOpen={setOpen} ref={ref} {...props} />
      );
  };

  return Component;
};


export default clickOutside;
