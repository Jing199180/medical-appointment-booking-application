import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          {
            value: "all",
            label: "All",
          },
          { value: "unfinished", label: "Unfinished" },
          { value: "finished", label: "Finished" },
        ]}
      />

      <SortBy
        options={[
          { value: "date-asc", label: "Sort by date (A-Z)" },
          { value: "date-desc", label: "Sort by date (Z-A)" },
          { value: "startTime-asc", label: "Sort by time (A-Z)" },
          { value: "startTime-desc", label: "Sort by time (Z-A)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
