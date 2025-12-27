function BoardCard({ title, description, status, createdAt, image }) {
  const statusStyles =
    status === "active"
      ? "bg-green-100 text-green-700"
      : "bg-gray-200 text-gray-600";

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover"
        />
      )}

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>

          <span
            className={`text-xs px-2 py-1 rounded ${statusStyles}`}
          >
            {status}
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-3">
          {description}
        </p>

        <p className="text-xs text-gray-400">
          Дата создания: {createdAt}
        </p>
      </div>
    </div>
  );
}

export default BoardCard;