import * as React from "react";
import { Typography } from "@material-ui/core";

export interface NotFoundProps {}

export const NotFound: React.FC = (props: NotFoundProps) => {
  return <Typography color="primary">NotFound</Typography>;
};
