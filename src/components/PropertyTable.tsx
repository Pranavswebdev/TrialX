import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SortSvg from "../assets/SortSvg";

interface Column<T> {
  id: keyof T;
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

const DataTable = <T,>({ columns, data }: DataTableProps<T>) => {
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof T>(columns[0].id);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof T
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = data?.sort((a, b) => {
    if (orderBy === "lastUpdate") {
      const dateA = new Date(a[orderBy] as unknown as string);
      const dateB = new Date(b[orderBy] as unknown as string);
      return order === "asc"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    } else {
      if (a[orderBy] < b[orderBy]) {
        return order === "asc" ? -1 : 1;
      }
      if (a[orderBy] > b[orderBy]) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    }
  });

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(13, 169, 235, 0.06)",
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
    "& td, & th": {
      border: 0,
    },
    "&:last-child td": {
      borderBottom: "none",
    },
  }));

  return (
    <Box sx={{ position: "relative" }}>
      <TableContainer
        sx={{ maxWidth: "100%", overflow: "auto" }}
        component={Paper}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "rgba(143, 149, 163, 0.14)" }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id as string}
                  sx={{ fontWeight: "bold" }}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={(event) => handleRequestSort(event, column.id)}
                    IconComponent={SortSvg}
                    hideSortIcon={false}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData?.map((row, index) => (
              <StyledTableRow key={index}>
                {columns?.map((column) => (
                  <TableCell key={column.id as string}>
                    {column.render
                      ? column.render(row)
                      : String(row[column.id])}
                  </TableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
