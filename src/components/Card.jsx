export default function Card({ title, children, color }) {
  color = color ? color : " bg-zinc-100 ";
  return (
    <div
      className={`${color} dark:bg-zinc-900 overflow-hidden p-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all thin-zinc-border`}
    >
      <h1 className="text-xl font-semibold mb-2 truncate text-white dark:text-zinc-200 ">
        {title}
      </h1>
      <div className=" text-lg font-light truncate text-white text-opacity-80 dark:text-opacity-100 dark:text-zinc-400">
        {children}
      </div>
    </div>
  );
}
