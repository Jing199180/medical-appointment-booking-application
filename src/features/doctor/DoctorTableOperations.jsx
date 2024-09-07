import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function DoctorTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="location"
        options={[
          {
            value: "all",
            label: "All",
          },
          { value: "north", label: "North" },
          { value: "central", label: "Central" },
          { value: "south", label: "South" },
          { value: "east", label: "East" },
        ]}
      />
      <SortBy
        options={[
          { value: "fullName-asc", label: "Sort by name (A-Z)" },
          { value: "fullName-desc", label: "Sort by name (Z-A)" },
          { value: "speciality-asc", label: "Sort by speciality (A-Z)" },
          { value: "speciality-desc", label: "Sort by speciality (Z-A)" },
        ]}
      />
    </TableOperations>
  );
}

export default DoctorTableOperations;
