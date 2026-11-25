import Sidebar from "./components/sidebar";
import StatCard from "./components/StatCard";
import RecentTasks from "./components/RecentTasks";
import ActiveProjects from "./components/ActiveProjects";

function App() {

  let stats = [
    {
      title: "Total Projects",
      value: "24",
      icon: "📁",
      color: "bg-purple-100"
    },
    {
      title: "Total Tasks",
      value: "1,248",
      icon: "📋",
      color: "bg-blue-100"
    },
    {
      title: "Active Members",
      value: "18",
      icon: "👥",
      color: "bg-green-100"
    },
    {
      title: "Pending Tasks",
      value: "96",
      icon: "🕒",
      color: "bg-yellow-100"
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">

      <Sidebar />

      <main className="flex-1 p-6">

        {/* Top Bar */}
        <div className="flex justify-between mb-8">

          <input
            type="text"
            placeholder="Search projects, tasks..."
            className="bg-white border rounded-lg px-4 py-2"
          />

          <p className="text-gray-500">
            Wednesday, Nov 25
          </p>

        </div>

        {/* Welcome */}
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome back, Sri Aiswarya! 👋
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Here's what's happening today.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((item, index) => (
            <StatCard
              key={index}
              title={item.title}
              value={item.value}
              icon={item.icon}
              color={item.color}
            />
          ))}

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          <div className="lg:col-span-2">
            <RecentTasks />
          </div>

          <div>
            <ActiveProjects />
          </div>

        </div>

      </main>

    </div>
  );
}

export default App;