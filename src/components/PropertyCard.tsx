import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface Column<T> {
  id: keyof T;
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface PropertyCardProps<T> {
  data: T;
  columns: Column<T>[];
}

const PropertyCard = <T,>({ data, columns }: PropertyCardProps<T>) => {
  return (
    <Card>
      <CardContent>
        {columns.map((column) => (
          <Typography
            key={column.id as string}
            variant="body2"
            color="text.secondary"
          >
            <strong>{column.label}:</strong>{" "}
            {column.render ? column.render(data) : String(data[column.id])}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
