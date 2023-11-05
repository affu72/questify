import logo from "./assets/logo.svg";

export default function Header() {
  return (
    <header className="w-full h-48 text-white flex items-center gap-8 pt-16 p-10 justify-center">
      <img src={logo} alt="questify-logo" className="w-40" />
      <h1 className="text-3xl sm:text-5xl md:text-7xl text-slate-200 uppercase font-dots flex grow-1 flex-col justify-center items-center gap-2 tracking-wide">
        <span>Questify</span>
        <span>The Quiz App</span>
      </h1>
    </header>
  );
}
