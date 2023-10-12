import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className="Content">
      <Header />
      <div className="UnderHeader">
        <input />
        <button>Button</button>
      </div>
      <table className="Recipe">
        <thead>
          <tr style={{ fontSize: "2.5rem" }}>
            <td>aqui</td>
            <td>aqui</td>
            <td>aqui</td>
            <td>aqui</td>
          </tr>
        </thead>
      </table>

      <button className="GoTop">Go Top</button>

      <footer>Aqui é o footer</footer>
    </div>
  );
};
