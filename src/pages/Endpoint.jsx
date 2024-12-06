import styled from "styled-components";
const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

const Th = styled.th`
  padding: 8px;
  background-color: ${(props) => props.theme.primary};
  color: white;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;



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
      <Table>
        <thead>
          <tr>
            <Th>Method</Th>
            <Th>URL</Th>
            <Th>Request Body (JSON)</Th>
            <Th>Response (JSON)</Th>
            <Th>Error (e)</Th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((entry, index) => (
            <Tr key={index}>
              <Td>{entry.method}</Td>
              <Td>{entry.url}</Td>
              <Td>{entry.requestBody}</Td>
              <Td>{entry.response}</Td>
              <Td>{entry.error}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Endpoint;
