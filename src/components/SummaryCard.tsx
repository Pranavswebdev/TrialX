import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface Card {
  title: string;

  count: number;

  color: string;
}
interface SummaryCardProps {
  title?: string;
  count?: number;
  color?: string;
  cards?: Card[];
}
const SummaryCard: React.FC<SummaryCardProps> = ({ title, count, color }) => (
  <Card
    sx={{
      backgroundColor: color,
      color: "#fff",
      borderRadius: "14px",
      width: "100%",
    }}
  >
    <CardContent
      sx={{
        display: "flex",
        alignItems: "flex-end",
        gap: "16px",
        justifyContent: "space-between",
        padding: "16px 24px",
      }}
    >
      <Typography
        sx={{ paddingBottom: "8px", borderBottom: "2px solid #BDBECB" }}
        variant="h6"
      >
        {title}
      </Typography>
      <Typography variant="h4">{count}</Typography>
    </CardContent>
  </Card>
);

const SummaryCards: React.FC<SummaryCardProps> = ({ cards }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", xl: "60%" },
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {cards?.map((card, index) => (
        <Box
          sx={{
            width: { xs: "100%", sm: "48%", lg: "23.6%" },
            maxWidth: { xs: "100%", lg: "280px" },
          }}
          key={index}
        >
          <SummaryCard {...card} />
        </Box>
      ))}
    </Box>
  );
};

export default SummaryCards;
