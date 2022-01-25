import React from "react";

const Support = ({ data }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">{data.name}</h3>
      <h6 className="text-slate-400 my-2">₹ {data.amt}</h6>
      <p>{data.msg}</p>
    </div>
  );
};

export default Support;
