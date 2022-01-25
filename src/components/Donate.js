import React, { useState } from "react";
import coffee from "../images/coffee.png";

const Donate = () => {
  const [donation, setDonation] = useState(1);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [pvt, setPvt] = useState(false);
  const [temp, setTemp] = useState(false);

  const handleDonation = () => {
    console.log(donation, name, msg, pvt);
    setTemp((temp) => !temp);
  };
  return (
    <React.Fragment>
      <h2 className="text-xl font-bold">
        Buy <span className="text-sky-600">Anand</span> coffee
      </h2>
      <img src={coffee} alt="coffee" className="my-4 mx-auto" />
      <div className="flex flex-col">
        <div>
          <span
            className={`cursor-pointer border-sky-600 mr-2 bg-sky-100 rounded-full py-2 px-3 ${
              donation === 1 && "bg-sky-800 text-white font-semibold"
            }`}
            onClick={() => setDonation(1)}
          >
            1
          </span>
          <span
            className={`cursor-pointer border-sky-600 mr-2 bg-sky-100 rounded-full py-2 px-3 ${
              donation === 3 && "bg-sky-800 text-white font-semibold"
            }`}
            onClick={() => setDonation(3)}
          >
            3
          </span>
          <span
            className={`cursor-pointer border-sky-600 mr-2 bg-sky-100 rounded-full py-2 px-3 ${
              donation === 5 && "bg-sky-800 text-white font-semibold"
            }`}
            onClick={() => setDonation(5)}
          >
            5
          </span>
          <input
            type="number"
            placeholder="Other"
            value={donation}
            className="mt-4 p-2 border rounded-lg w-24"
            onChange={(e) => setDonation(parseInt(e.target.value))}
          />
        </div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-4 p-2 border rounded-lg"
          placeholder="Your Name... (optional)"
        ></input>
        <textarea
          type="text"
          rows="4"
          name="msg"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="my-4 p-2 border rounded-lg"
          placeholder="Say something nice... (optional)"
        ></textarea>
        <div className="mb-4 flex flex-start items-center gap-3">
          <input
            type="checkbox"
            value={pvt}
            onChange={(e) => {
              setPvt(e.target.checked);
            }}
          />
          <span className="text-sm text-slate-600">Make it private!</span>
        </div>
        <button
          type="button"
          className={`px-12 py-2 rounded-full bg-sky-600 text-white font-semibold shadow-lg ${
            isNaN(donation) && "bg-slate-300"
          }`}
          onClick={handleDonation}
          disabled={isNaN(donation)}
        >
          Support {isNaN(donation) || `₹ ${50 * donation}`}
        </button>
        {temp && (
          <p className="text-sm mt-3 text-gray-600">
            Still under development 😅
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Donate;
