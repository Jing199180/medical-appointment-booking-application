import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function DoctorTimeTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          {
            value: "all",
            label: "All",
          },
          { value: "unbooked", label: "Unbooked" },
          { value: "booked", label: "booked" },
        ]}
      />

      <SortBy
        options={[
          { value: "startTime-asc", label: "Sort by time (A-Z)" },
          { value: "startTime-desc", label: "Sort by time (Z-A)" },
        ]}
      />
    </TableOperations>
  );
}

export default DoctorTimeTableOperations;
