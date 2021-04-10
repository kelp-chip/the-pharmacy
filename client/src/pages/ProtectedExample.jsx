import { withRouter } from "react-router-dom";

function ProtectedExample() {
  return (
    <div>
      <h1>Protected Example Page</h1>
      <p>If you see this, it means you are authenticated!</p>
    </div>
  );
}

export default withRouter(ProtectedExample);
