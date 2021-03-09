import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { PersonInfo } from "../../types/details";

interface IProps {
  person: PersonInfo;
}

const PersonDetails = ({ person }: IProps) => {
  if (!person.name) return null
  return (
    <Card>
      <CardContent>
        <Typography>name: {person.name}</Typography>
        <Typography>gender: {person.gender}</Typography>
        <Typography>height: {person.height}</Typography>
        <Typography>mass: {person.mass}</Typography>
        <img src={person.image} alt="alt" />
      </CardContent>
    </Card>
  );
};

export default PersonDetails;
