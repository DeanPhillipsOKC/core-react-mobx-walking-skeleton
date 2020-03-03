import React from "react";
import { Grid, List } from "semantic-ui-react";
import { IActivity } from "../../../app/layout/models/activity";
import { ActivityList } from "./ActivityList";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";

interface IProps {
    activities: IActivity[]
}

export const ActivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
          <ActivityList activities={activities}></ActivityList>
      </Grid.Column>
      <Grid.Column width={6}>
          <ActivityDetails></ActivityDetails>
          <ActivityForm></ActivityForm>
      </Grid.Column>
    </Grid>
  );
};