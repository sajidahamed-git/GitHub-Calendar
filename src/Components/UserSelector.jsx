const users = ["You","Ajay", "Priya", "Karthik", "Sneha", "Vikram"];

function UserSelector({ selectedUser, onUserChange }) {
  return (
    <div>
      <select
        value={selectedUser}
        onChange={(event) => onUserChange(event.target.value)}
        className="UserSelector bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block p-2.5 placeholder-gray-400"
      >
        {users.map((user) => (
          <option value={user} key={user}>
            {user}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserSelector;
