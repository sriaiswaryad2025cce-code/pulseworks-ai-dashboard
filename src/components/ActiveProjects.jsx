function ActiveProjects() {

  let projects = [
    { name: "Image Labeling", members: "6 members", status: "Active", icon: "🟣" },
    { name: "Speech to Text", members: "4 members", status: "Active", icon: "🎙️" },
    { name: "Model QA", members: "5 members", status: "On Hold", icon: "🔴" },
    { name: "DC Reporting", members: "3 members", status: "Active", icon: "🟢" },
    { name: "Data Pipeline", members: "7 members", status: "Active", icon: "🔵" }
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">

      <h2 className="text-xl font-bold mb-5">
        Active Projects
      </h2>

      <ul className="space-y-4">

        {projects.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b pb-3"
          >

            <div className="flex gap-3 items-center">

              <span className="text-xl">
                {item.icon}
              </span>

              <div>
                <h3 className="font-medium">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {item.members}
                </p>
              </div>

            </div>

            <span className={`text-xs px-2 py-1 rounded-full ${
              item.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}>
              {item.status}
            </span>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default ActiveProjects;