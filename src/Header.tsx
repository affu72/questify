import logo from "./assets/logo.svg";

export default function Header() {
  return (
    <header className="w-full h-48 text-white flex items-center gap-8 p-10 justify-center">
      <img src={logo} alt="questify-logo" className="w-40" />
      <h1 className="text-7xl text-slate-200 uppercase font-dots">
        Questify: The Quiz App
      </h1>
    </header>
  );
}
