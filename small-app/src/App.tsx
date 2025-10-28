import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import hdLogo from "./hdLogo.svg"
import { playerData } from "./data";
import type { GameData } from "./data"
import "./App.css";

export default function App() {
  const [selected, setSelected] = useState<string>("Curry");

  const [visibleKeys, setVisibleKeys] = useState<Record<string, boolean>>({
    points: true,
    assists: true,
    rebounds: true,
  });

  const data: GameData[] = playerData[selected];
  const avgPoints =
    data.reduce((sum, g) => sum + g.points, 0) / data.length;

  const toggleKey = (key: string) => {
    setVisibleKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderLegend = () => (
    <div style={{ marginBottom: "0.5rem" }}>
      <span>Filter:</span>
      {Object.keys(visibleKeys).map((key) => (
        <span
          key={key}
          onClick={() => toggleKey(key)}
          className={`key-option ${visibleKeys[key] ? "active" : "inactive"} ${key==="points"||key==="assists"? (key==="points" ? "points" : "assists") : "rebounds"}`}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </span>
      ))}
    </div>
  );



  return (
    <>
      <header>
        <h1 className="main-title">Small Interview Project for: <img className="logo" src={hdLogo} /> </h1>
      </header>
      <div className="container">
        <h1>Basketball Stats Dashboard</h1>
        <p style={{marginTop:"20px", marginBottom:"15px"}}>Select a player to view their performance across games.</p>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {Object.keys(playerData).map((player) => (
            <option key={player}>{player}</option>
          ))}
        </select>
        

        <div className="chart-container">
          <ResponsiveContainer width="95%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="game" />
              <YAxis domain={[0, 40]}/>
              <Tooltip />
              {visibleKeys.points && <Bar dataKey="points" fill="#3b82f6" />}
              {visibleKeys.assists && <Bar dataKey="assists" fill="#82ca9d" />}
              {visibleKeys.rebounds && <Bar dataKey="rebounds" fill="#f6c23e" />}
            </BarChart>
          </ResponsiveContainer>
          <div className="legend-wrapper">{renderLegend()}</div>

        </div>

        <p className="summary">
          Average Points: <strong>{avgPoints.toFixed(1)}</strong>
        </p>

        <footer>Built by Elif Yildiz — HDI Demo Project   <a target="_blank" href="https://github.com/ebyildiz/player-data-analysis/tree/main/small-app" style={{color:"#3b82f6", margin:"5px"}}>Link to Github</a></footer>
       
      </div>
    </>
  );
}
