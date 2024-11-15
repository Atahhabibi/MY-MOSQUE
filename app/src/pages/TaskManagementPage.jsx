import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";
import { tasks } from "../taskData";

const TaskManagementPage = () => {
  const [filters, setFilters] = useState({
    type: "",
    date: "",
    points: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtered tasks based on filters
  const filteredTasks = tasks.filter((task) => {
    return (
      (filters.type ? task.type === filters.type : true) &&
      (filters.date ? task.date === filters.date : true) &&
      (filters.points ? task.points >= parseInt(filters.points, 10) : true)
    );
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  // Get current page tasks
  const currentTasks = filteredTasks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle previous and next buttons
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleDeleteClick = (task) => {
    setTaskToDelete(task);
    setShowModal(true);
  };

  const confirmDelete = () => {
    // Add delete logic here
    setShowModal(false);
    setTaskToDelete(null);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-900 text-gray-200 min-h-screen">
      <div className="w-full max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Task Management</h2>

        {/* Filter Form */}
        <div className="mb-6 p-4 rounded-lg bg-gray-800 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Filter Tasks</h3>
          <form className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label className="block text-white mb-1">Type</label>
              <select
                name="type"
                onChange={handleFilterChange}
                className="p-2 w-full rounded bg-gray-700 text-white"
              >
                <option value="">All Types</option>
                <option value="crowd control">Crowd Control</option>
                <option value="setup">Setup</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-1">Date</label>
              <input
                type="date"
                name="date"
                onChange={handleFilterChange}
                className="p-2 w-full rounded bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Minimum Points</label>
              <input
                type="number"
                name="points"
                placeholder="e.g. 10"
                onChange={handleFilterChange}
                className="p-2 w-full rounded bg-gray-700 text-white"
              />
            </div>
          </form>
        </div>

        {/* Tasks Container with Pagination at Bottom */}
        <div className="flex flex-col justify-between h-[750px]"> {/* Reduced height */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {Array.from({ length: itemsPerPage }, (_, index) => {
              const task = currentTasks[index];
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg ${
                    task ? "bg-gray-800" : "bg-transparent"
                  }`}
                >
                  {task ? (
                    <div className="flex flex-col space-y-3">
                      <h3 className="text-2xl font-semibold text-white mb-2">{task.name}</h3>
                      <div className="text-gray-400 flex items-center space-x-2">
                        <FaCalendarAlt />
                        <p>Date: {task.date}</p>
                      </div>
                      <div className="text-gray-400 flex items-center space-x-2">
                        <FaClock />
                        <p>Time: {task.time}</p>
                      </div>
                      <div className="text-gray-400 flex items-center space-x-2">
                        <FaUsers />
                        <p>Volunteers Needed: {task.volunteersNeeded}</p>
                      </div>
                      <p className="text-gray-400">Points: {task.points}</p>

                      <div className="flex justify-end space-x-3 mt-4">
                        <button
                          onClick={() => alert("Edit functionality here")}
                          className="p-2 bg-yellow-500 rounded text-white flex items-center"
                        >
                          <FaEdit className="mr-1" /> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(task)}
                          className="p-2 bg-red-600 rounded text-white flex items-center"
                        >
                          <FaTrashAlt className="mr-1" /> Delete
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="invisible">Placeholder</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-700 text-gray-400 hover:bg-gray-600 disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-400"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-700 text-gray-400 hover:bg-gray-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-gray-900 p-6 rounded shadow-lg text-center">
              <h3 className="text-2xl text-white mb-4">Confirm Deletion</h3>
              <p className="text-gray-400 mb-6">
                Are you sure you want to delete "{taskToDelete?.name}"?
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 rounded text-white"
                >
                  Delete
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-600 rounded text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManagementPage;
