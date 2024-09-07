import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function PatientTimeTableOpertations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          {
            value: "all",
            label: "All",
          },
          { value: "unbooked", label: "尚未預約" },
          { value: "booked", label: "已預約" },
        ]}
      />

      <SortBy
        options={[
          { value: "startTime-asc", label: "時間排序 (A-Z)" },
          { value: "startTime-desc", label: "時間排序 (Z-A)" },
        ]}
      />
    </TableOperations>
  );
}

export default PatientTimeTableOpertations;
