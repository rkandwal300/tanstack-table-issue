import React from "react";
import "./App.css";
import { allProjects } from "./lib/projectData";
import CustomCombobox from "./components/shared/CustomCombobox";
import { ItemData } from "./lib/ItemData";
import { Columns } from "./components/shared/column";
import { DataTable } from "./components/shared/DataTable";

function App() {
  const [value, setValue] = React.useState("");
  const [projects, setProjects] = React.useState<
    { label: string; value: string }[]
  >([]);

  const handleQuery = (search: string) => {
    setValue(search);
  };
  console.log("search value : ", value);

  React.useEffect(() => {
    setProjects(
      allProjects.map((project) => ({
        label: project.name,
        value: project._id,
      }))
    );
  }, []);
  const handleValueChange = (value: string) => {
    console.log("value selected = ", value);
  };

  const columns = Columns({
    handleQuery,
    allData: projects,
    searchValue: value,
    onValueChange: handleValueChange,
    placeholder: "Select project",
  });

  // console.log(" projects ", projects);
  return (
    <div className="flex flex-col  gap-2 ">
      <CustomCombobox
        searchValue={value}
        allData={projects}
        isBackendSearch={true}
        handleQuery={handleQuery}
        onValueChange={(value: string) => {
          console.log("value selected = ", value);
        }}
        placeholder={"Select project "}
      />

      <DataTable data={ItemData} columns={columns} />
    </div>
  );
}

export default App;
