import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const CakeSection = () => {
  const cakes = [
    {
      content:
        "Pastry can be filled, layered, or shaped into various forms, allowing for endless creative possibilities in baking and culinary arts. It can be enjoyed in both sweet and savory dishes, ranging from pies and pastries to quiches and turnovers.",

      name: "Chocolate",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
    },
    {
      content:
        "Pastry can be filled, layered, or shaped into various forms, allowing for endless creative possibilities in baking and culinary arts. It can be enjoyed in both sweet and savory dishes, ranging from pies and pastries to quiches and turnovers.",
      name: "Red Velvet",
      image:
        "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80",
    },
    {
      content:
        "Pastry can be filled, layered, or shaped into various forms, allowing for endless creative possibilities in baking and culinary arts. It can be enjoyed in both sweet and savory dishes, ranging from pies and pastries to quiches and turnovers.",
      name: "Rose",
      image:
        "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      content:
        "Pastry can be filled, layered, or shaped into various forms, allowing for endless creative possibilities in baking and culinary arts. It can be enjoyed in both sweet and savory dishes, ranging from pies and pastries to quiches and turnovers.",
      name: "Butter Scotch",
      image:
        "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80",
    },
    {
      content:
        "Pastry can be filled, layered, or shaped into various forms, allowing for endless creative possibilities in baking and culinary arts. It can be enjoyed in both sweet and savory dishes, ranging from pies and pastries to quiches and turnovers.",
      name: "Strawberry",
      image:
        "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80",
    },
    {
      content:
        "Pastry can be filled, layered, or shaped into various forms, allowing for endless creative possibilities in baking and culinary arts. It can be enjoyed in both sweet and savory dishes, ranging from pies and pastries to quiches and turnovers.",
      name: "Mix fruit",
      image:
        "https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <>
      <Typography variant="h4" my={6}>
        Cakes-
      </Typography>
      <Stack mb={4} direction={"row"} gap={2} sx={{ flexWrap: "wrap" }}>
        {cakes.map((cake) => {
          return (
            <Card key={cake} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 210 }}
                image={cake.image}
                title="testy pastry"
              />
              <CardContent>
                <Typography variant="h5">{cake.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {cake.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default CakeSection;
