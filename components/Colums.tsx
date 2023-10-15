import { ColumnDef } from "@tanstack/react-table";
import { JobType, varient } from "@/interfaces/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckCircle, MoreHorizontal, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ClipLoader } from "react-spinners";
import useDeleteJob from "@/hooks/useDeleteJob";
import axios from "axios";
import Link from "next/link";

// const deleteJob = async (id: string) => {
//   const response = await axios({
//     method: "delete",
//     url: `${process.env.NEXT_PUBLIC_API}/api/job/delete/${id}`,
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   const message = await response.data.message;

//   if (response.status === 200) {
//     return {
//       status: response.status,
//       message: message,
//     };
//   }
// };

export const Columns: ColumnDef<JobType>[] = [
  {
    accessorKey: "ID",
    header: "ID",
  },
  {
    id: "status",
    header: "Status",
    cell: ({ row }) => {
      const data = row.original;

      if (data.status === "RUNNING") {
        return <ClipLoader size={18} color="#2563eb" />;
      } else if (data.status === "FINISHED") {
        return <CheckCircle size={18} color="green" />;
      } else {
        return <XCircle size={18} color="red" />;
      }
    },
  },
  {
    id: "Data",
    header: "Data",
    cell: ({ row }) => {
      const data = row.original;

      if (data.data) {
        return (
          <Link
            href={`/user/jobs/${data.ID}`}
            className="text-blue-400 hover:text-blue-700"
          >
            View Data
          </Link>
        );
      } else {
        return <h1>Data not available</h1>;
      }
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => {}} className="cursor-pointer">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const VarientCols: ColumnDef<varient>[] = [
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    id: "images",
    header: "Images",
    cell: ({ row }) => {
      const data = row.original;

      if (data.image) {
        return <img src={data.image} alt="varient-img" className="w-20" />;
      } else {
        return <h1>No Image available</h1>;
      }
    },
  },
];
