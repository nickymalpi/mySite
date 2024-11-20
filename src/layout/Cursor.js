import { Fragment, useEffect } from "react";
import { customCursor } from "../utils";
const Cursor = () => {
  useEffect(() => {
    customCursor();
  }, []);

  return (
    <Fragment>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
      <div className="cavani_fn_moving_box" />
    </Fragment>
  );
};
export default Cursor;
