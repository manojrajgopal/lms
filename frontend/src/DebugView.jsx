// src/DebugView.jsx
import global1 from "./global1";

function DebugView() {
  const quizzes = global1.quizzes || [];
  const assignments = global1.assignments || [];

  return (
    <div>
      <h2>Saved Quizzes:</h2>
      <pre>{JSON.stringify(quizzes, null, 2)}</pre>

      <h2>Saved Assignments:</h2>
      <pre>{JSON.stringify(assignments, null, 2)}</pre>
    </div>
  );
}

export default DebugView;
