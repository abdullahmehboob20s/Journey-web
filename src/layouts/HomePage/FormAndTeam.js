import Form from "components/Form";
import Team from "./Team";

function FormAndTeam() {
  return (
    <div className="py-[100px]">
      <div className="container">
        <div className="mb-[100px]">
          <Form />
        </div>

        <div>
          <Team />
        </div>
      </div>
    </div>
  );
}

export default FormAndTeam;
