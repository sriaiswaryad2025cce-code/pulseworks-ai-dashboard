function RecentTasks() {

  let tasks = [
    { task: "Review AI model", project: "Image Labeling", assigned: "AK", status: "Completed" },
    { task: "Validate dataset", project: "Speech to Text", assigned: "SP", status: "In Progress" },
    { task: "Update evaluation script", project: "Model QA", assigned: "AR", status: "Pending" },
    { task: "Prepare report", project: "DC Reporting", assigned: "VK", status: "Completed" },
    { task: "Sync data", project: "Data Pipeline", assigned: "NK", status: "Pending" }
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">

      <h2 className="text-xl font-bold mb-5">
        Recent Tasks
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>
            <tr className="text-sm text-gray-500 border-b">
              <th className="p-3">Task</th>
              <th className="p-3">Project</th>
              <th className="p-3">Assigned</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>

            {tasks.map((item, index) => (
              <tr key={index} className="border-b text-sm">

                <td className="p-3">{item.task}</td>
                <td className="p-3">{item.project}</td>
                <td className="p-3">{item.assigned}</td>

                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : item.status === "In Progress"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {item.status}
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RecentTasks;