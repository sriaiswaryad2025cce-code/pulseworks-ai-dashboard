function StatCard({ title, value, icon, color }) {

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">

      <div className="flex items-center gap-3">

        <div className={`${color} p-3 rounded-lg text-xl`}>
          {icon}
        </div>

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-2xl font-bold">
            {value}
          </h2>
        </div>

      </div>

    </div>
  );
}

export default StatCard;