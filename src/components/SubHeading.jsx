export default function SubHeading({ eyebrow, title, action }) {
  return (
    <div className="flex flex-wrap items-end gap-x-4 gap-y-2 mb-8">
      <div>
        <p className="section-subheading">{eyebrow}</p>
        <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex-1 h-px mb-3 bg-gradient-to-r from-slate-700 to-transparent hidden sm:block" />
      {action && <div className="mb-1.5">{action}</div>}
    </div>
  );
}
