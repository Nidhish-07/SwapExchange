import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="flex justify-center items-center py-3">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500" />
    </div>
  );
};

export default Loader;
