import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <div className="bg-gray-800 h-screen">
      <Header></Header>
      <Main>
        <p>1/15</p>
        <span>Questions?</span>
      </Main>
    </div>
  );
}
