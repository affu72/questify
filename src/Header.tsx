import logo from "./assets/logo.svg";

export default function Header() {
  return (
    <header className="grid grid-cols-[8rem_auto] items-center justify-center gap-x-6">
      <img src={logo} alt="questify-logo" className="w-full" />
      <h1 className="text-2xl sm:text-4xl md:text-5xl text-slate-200 uppercase font-dots flex grow-1 flex-col justify-center items-center gap-2 tracking-wide">
        <span>Questify</span>
        <span>The Quiz App</span>
      </h1>
    </header>
  );
}
