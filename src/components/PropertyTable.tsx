import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ErrorIcon from "@mui/icons-material/Error";

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

const PropertyTable: React.FC = () => {
  const properties: PropertyData[] = [
    {
      name: "Hollywood",
      address: "2828 Northwest 1st Avenue, Miami, FL 33127",
      phone: "+1 1234567890",
      businessHours: "Present",
      category: "Apartment Complex",
      website: "Available",
      mismatched: 2,
      missing: 7,
      lastUpdate: "MM/DD/YYYY HH:MM",
    },
    {
      name: "The Nines at Wellesley",
      address: "50 Stoneview Trail Lilburn, GA 30047",
      phone: "+1 1234567890",
      businessHours: "Present",
      category: "Apartment Building",
      website: "Available",
      mismatched: 5,
      missing: 5,
      lastUpdate: "MM/DD/YYYY HH:MM",
    },
    // Add more rows as needed
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>PROPERTY NAME</TableCell>
            <TableCell>ADDRESS</TableCell>
            <TableCell>PHONE</TableCell>
            <TableCell>BUSINESS HOURS</TableCell>
            <TableCell>CATEGORY</TableCell>
            <TableCell>WEBSITE</TableCell>
            <TableCell>MISMATCHED</TableCell>
            <TableCell>MISSING</TableCell>
            <TableCell>LAST UPDATE DATE AND TIME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((property, index) => (
            <TableRow
              key={index}
              sx={{ backgroundColor: index % 2 ? "#f9fafb" : "#ffffff" }}
            >
              <TableCell sx={{ fontWeight: 700 }}>{property.name}</TableCell>
              <TableCell>{property.address}</TableCell>
              <TableCell>{property.phone}</TableCell>
              <TableCell>
                {property.businessHours}
                <Tooltip title="More Info">
                  <IconButton size="small">
                    <InfoIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </TableCell>
              <TableCell>{property.category}</TableCell>
              <TableCell>
                <Checkbox
                  checked={property.website === "Available"}
                  color="primary"
                />
                {property.website}
              </TableCell>
              <TableCell>
                {property.mismatched}
                {property.mismatched > 0 && <ErrorIcon color="error" />}
              </TableCell>
              <TableCell>
                {property.missing}
                {property.missing > 0 && <ErrorIcon color="error" />}
              </TableCell>
              <TableCell>{property.lastUpdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PropertyTable;
