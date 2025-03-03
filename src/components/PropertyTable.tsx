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
import { styled } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";

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
  ];
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(13, 169, 235, 0.06)",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer
      sx={{ width: "calc(100vw - 64px)", overflow: "auto" }}
      component={Paper}
    >
      <Table>
        <TableHead
          sx={{
            backgroundColor: "rgba(143, 149, 163, 0.14)",
          }}
        >
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>
              PROPERTY NAME
              <IconButton size="small" sx={{ ml: 1 }}>
                <FilterListIcon />
              </IconButton>
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>ADDRESS</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>PHONE</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>BUSINESS HOURS</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>CATEGORY</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>WEBSITE</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>MISMATCHED</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>MISSING</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>
              LAST UPDATE DATE AND TIME
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((property, index) => (
            <StyledTableRow
              key={index}
              sx={{ backgroundColor: index % 2 ? "#f9fafb" : "#ffffff" }}
            >
              <TableCell sx={{ color: "#3464EB" }}>{property.name}</TableCell>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PropertyTable;
