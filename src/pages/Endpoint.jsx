const Endpoint = () => {
  const apiData = [
    {
      method: "GET",
      url: "/api/users",
      requestBody: "",
      response: "",
    },
    {
      method: "GET",
      url: "/api/users/{id}",
      requestBody: "",
      response: "user (1)",
      error: "(e1)",
    },
    {
      method: "POST",
      url: "/api/users",
      requestBody: "user(1) without id",
      response: "",
      error: "(e2)",
    },
    {
      method: "PUT",
      url: "/api/users/{id}",
      requestBody: "user(1) without id",
      response: "user (1)",
      error: "(e1), (e2)",
    },
    {
      method: "GET",
      url: "/api/exercise",
      requestBody: "",
      response: "[exercise, exercise, ...]",
      error: "",
    },
    {
      method: "GET",
      url: "/api/exercise/{musclegroup}",
      requestBody: "",
      response: "[exercise, exercise, ...]",
      error: "(e1)",
    },
    {
      method: "POST",
      url: "/api/exercise",
      requestBody: "exercise(2) without id",
      response: "exercise(2)",
      error: "(e2)",
    },
    {
      method: "PUT",
      url: "/api/exercise/{id}",
      requestBody: "exercise(2) without id",
      response: "exercise(2)",
      error: "(e1), (e2)",
    },
    {
      method: "GET",
      url: "/api/session",
      requestBody: "",
      response: " ",
      error: "",
    },
    {
      method: " POST",
      url: "/api/sessions",
      requestBody: "session (3) without id",
      response: "session (3)",
      error: "(e2)",
    },

    {
      method: "PUT",
      url: "/api/sessions/{id}",
      requestBody: "session (3) without id",
      response: "session (3)",
      error: "(e1), (e2)",
    },
  ];

  return (
    <div>
      <h1>API Documentation</h1>
      <table
        border="1"
        style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Method</th>
            <th>URL</th>
            <th>Request Body (JSON)</th>
            <th>Response (JSON)</th>
            <th>Error (e)</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.method}</td>
              <td>{entry.url}</td>
              <td>{entry.requestBody}</td>
              <td>{entry.response}</td>
              <td>{entry.error}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Endpoint;
