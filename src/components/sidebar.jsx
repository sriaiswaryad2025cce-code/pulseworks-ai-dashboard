function Sidebar() {

  let menu = [
    "Dashboard",
    "Projects",
    "Tasks",
    "Team",
    "Reports",
    "Settings"
  ];

  return (
    <aside className="w-56 bg-slate-900 text-white p-5">

      <h2 className="text-xl font-bold mb-8">
        PulseWorks AI
      </h2>

      <ul className="space-y-3">

        {menu.map((item, index) => (
          <li
            key={index}
            className={`p-3 rounded-lg cursor-pointer ${
              index === 0
                ? "bg-indigo-600"
                : "hover:bg-slate-700"
            }`}
          >
            {item}
          </li>
        ))}

      </ul>

    </aside>
  );
}

export default Sidebar;