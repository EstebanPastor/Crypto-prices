import React from "react";
import CoinRow from "./CoinRow";

const TableCoins = ({ coins, search }) => {
  const title = ["#", "Coin", "Price", "Price Change", "24hs volume"];

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {title.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow coin={coin} index={index + 1} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
