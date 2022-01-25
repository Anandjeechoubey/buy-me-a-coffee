import React from "react";
import "./App.css";
import Card from "./components/Card";
import Donate from "./components/Donate";
import Header from "./components/Header";
import Support from "./components/Support";

const supporters = [
  {
    name: "John Doe",
    msg: "Hey man! You're doing great, keep the good work up",
    amt: 6,
  },
  {
    name: "John Doe",
    msg: "Hey man! You're doing great, keep the good work up",
    amt: 6,
  },
  {
    name: "John Doe",
    msg: "Hey man! You're doing great, keep the good work up",
    amt: 6,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body flex flex-col-reverse justify-end lg:flex-row px-6 md:px-32 lg:px-64 py-12 gap-8">
        <div className="lg:flex-grow text-left">
          <Card>
            <h2 className="text-2xl font-bold">
              Hey 👋 This is Anand. You can now buy me a coffee!
            </h2>
          </Card>
          <h4 className="text-lg my-6 text-slate-400 font-semibold">
            RECENT SUPPORTERS
          </h4>
          {supporters.map((supporter, index) => (
            <Card key={index}>
              <Support data={supporter} />
            </Card>
          ))}
        </div>
        <div className="lg:flex-grow-0 min-w-96">
          <Card>
            <Donate />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
