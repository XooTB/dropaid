import { ColumnDef } from "@tanstack/react-table";
import { JobType } from "@/interfaces/data";

export const Columns: ColumnDef<JobType>[] = [
  {
    accessorKey: "ID",
    header: "ID",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "data",
    header: "Data",
  },
];
