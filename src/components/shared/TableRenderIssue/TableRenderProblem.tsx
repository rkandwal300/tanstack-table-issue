import React from "react";
import CustomCombobox from "./CustomCombobox";
import { DataTable } from "./DataTable";
import { allProjects } from "@/lib/projectData";
import { ItemData } from "@/lib/ItemData";
import { Columns } from "./column";

export default function TableRenderProblem() {
  const [value, setValue] = React.useState("");
  const [projects, setProjects] = React.useState<
    { label: string; value: string }[]
  >([]);

  const handleQuery = (search: string) => {
    setValue(search);
  };

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

  return (
    <div className="flex flex-col flex-1 gap-2 ">
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
