// dummyData.ts

import { IconButton, Tooltip } from "@mui/material";
import { JSX } from 'react';
import InfoIcon from "@mui/icons-material/Info";
import ReportIcon from "@mui/icons-material/Report";
import LaunchIcon from "@mui/icons-material/Launch";
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

interface AnalyticsData {
  metric: string;
  value: number | string;
  change: string;
  lastUpdate: string;
}

interface ScheduledUpdate {
  update: string;
  scheduledTime: string;
  status: string;
}

interface Column<T> {
  id: keyof T;
  label: string;
  render?: (item: T) => JSX.Element;
}

const propertyColumns: Column<PropertyData>[] = [
  { id: "name", label: "PROPERTY NAME" },
  { id: "address", label: "ADDRESS" },
  { id: "phone", label: "PHONE" },
  {
    id: "businessHours",
    label: "BUSINESS HOURS",
    render: (property) => (
      <>
        {property.businessHours}
        <Tooltip title="More Info">
          <IconButton  size="small">
            <InfoIcon color="primary" />
          </IconButton>
        </Tooltip>
      </>
    ),
  },
  { id: "category", label: "CATEGORY" },
  {
    id: "website",
    label: "WEBSITE",
    render: (property) => (
      <>
        {property.website}
        <Tooltip title="Visit Website">
          <IconButton size="small">
            <LaunchIcon color="primary" />
          </IconButton>
        </Tooltip>
      </>
    ),
  },
  {
    id: "mismatched",
    label: "MISMATCHED",
    render: (property) => (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {property.mismatched}
          {property.mismatched > 0 && <ReportIcon color="error" />}
        </div>
      </>
    ),
  },
  {
    id: "missing",
    label: "MISSING",
    render: (property) => (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {property.missing}
          {property.missing > 0 && <ReportIcon color="error" />}
        </div>
      </>
    ),
  },
  { id: "lastUpdate", label: "LAST UPDATE DATE AND TIME" },
];

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
    lastUpdate: "10/12/2023 14:30",
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
    lastUpdate: "10/12/2023 14:30",
  },
  {
    name: "Sunset Villas",
    address: "1234 Sunset Blvd, Los Angeles, CA 90026",
    phone: "+1 9876543210",
    businessHours: "9 AM - 6 PM",
    category: "Condominium",
    website: "Available",
    mismatched: 1,
    missing: 3,
    lastUpdate: "10/11/2023 10:15",
  },
  {
    name: "Greenwood Apartments",
    address: "5678 Elm Street, Denver, CO 80220",
    phone: "+1 2345678901",
    businessHours: "9 AM - 5 PM",
    category: "Apartment Complex",
    website: "Available",
    mismatched: 0,
    missing: 2,
    lastUpdate: "10/10/2023 09:45",
  },
];

const analyticsColumns: Column<AnalyticsData>[] = [
  { id: "metric", label: "METRIC" },
  { id: "value", label: "VALUE" },
  { id: "change", label: "CHANGE" },
  { id: "lastUpdate", label: "LAST UPDATE DATE AND TIME" },
];

const analyticsData: AnalyticsData[] = [
  {
    metric: "Total Visits",
    value: 1200,
    change: "+5%",
    lastUpdate: "10/12/2023 14:30",
  },
  {
    metric: "New Signups",
    value: 300,
    change: "+10%",
    lastUpdate: "10/12/2023 14:30",
  },
  {
    metric: "Bounce Rate",
    value: "20%",
    change: "-2%",
    lastUpdate: "10/11/2023 10:15",
  },
  {
    metric: "Average Session Duration",
    value: "5m 30s",
    change: "+3%",
    lastUpdate: "10/10/2023 09:45",
  },
];

const scheduledUpdateColumns: Column<ScheduledUpdate>[] = [
  { id: "update", label: "UPDATE" },
  { id: "scheduledTime", label: "SCHEDULED TIME" },
  { id: "status", label: "STATUS" },
];

const scheduledUpdates: ScheduledUpdate[] = [
  {
    update: "Database Maintenance",
    scheduledTime: "10/15/2023 02:00",
    status: "Pending",
  },
  {
    update: "Feature Rollout",
    scheduledTime: "10/16/2023 14:00",
    status: "Scheduled",
  },
  {
    update: "Security Patch",
    scheduledTime: "10/17/2023 22:00",
    status: "Pending",
  },
  {
    update: "UI Improvements",
    scheduledTime: "10/18/2023 09:00",
    status: "Scheduled",
  },
];

export {
  properties,
  analyticsColumns,
  analyticsData,
  scheduledUpdateColumns,
  scheduledUpdates,
  propertyColumns,
};
