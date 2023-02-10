export default function Card({ title, children }) {
  return (
    <div className=" bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
      <h1 className=" text-xl font-semibold mb-2 truncate text-zinc-200">
        {title}
      </h1>
      <p className=" text-lg font-light truncate text-zinc-400">{children}</p>
    </div>
  );
}
