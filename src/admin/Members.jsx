export default function Members() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  return (
    <div>
      <h2>Registered Users</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="2" align="center">No users found</td>
            </tr>
          ) : (
            users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
