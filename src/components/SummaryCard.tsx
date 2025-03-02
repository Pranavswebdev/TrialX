import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

interface SummaryCardProps {
  title: string;
  count: number;
  color: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, count, color }) => (
  <Card sx={{ backgroundColor: color, color: "#fff" }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4">{count}</Typography>
    </CardContent>
  </Card>
);

const SummaryCards: React.FC = () => {
  const cards = [
    { title: "Mismatched", count: 27, color: "#9333ea" },
    { title: "Missing", count: 10, color: "#f97316" },
    { title: "Duplicates", count: 19, color: "#9ca3af" },
    { title: "Issues with Updates/Deletions", count: 10, color: "#ec4899" },
  ];

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <SummaryCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
