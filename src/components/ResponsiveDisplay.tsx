import { useTheme } from "@mui/material/styles";
import { Grid, useMediaQuery } from "@mui/material";
import { lazy, Suspense } from "react";

const PropertyCard = lazy(() => import("./PropertyCard"));
const DataTable = lazy(() => import("./PropertyTable"));

interface PropertyData {
  name: string;
  address: string;
  phone: string;
  businessHours: string;
  category: string;
  website: string;
  mismatched: number;
  missing: number;
  lastUpdate: string;
}

interface ResponsivePropertyDisplayProps<T extends PropertyData> {
  properties: T[];
  columns: { id: keyof T; label: string }[];
}

const ResponsivePropertyDisplay = <T extends PropertyData>({
  columns,
  properties,
}: ResponsivePropertyDisplayProps<T>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMobile ? (
        <Grid container spacing={2}>
          {properties.map((property, index) => (
            <Grid item xs={12} key={index}>
              <PropertyCard data={property} columns={columns} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <DataTable data={properties} columns={columns} />
      )}
    </Suspense>
  );
};

export default ResponsivePropertyDisplay;
