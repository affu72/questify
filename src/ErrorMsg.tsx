export default function ErrorMsg({message}: {message: string}) {
  return (
    <div className="px-8 py-4 rounded-xl bg-slate-900 text-red-500">
      <span>{message}</span>
    </div>
  );
}
