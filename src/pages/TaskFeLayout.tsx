import { useMemo } from "react";
import { Page } from "@shopify/polaris";

import TaskFE from "./task-fe";
const TaskFeLayout = () => {
  const render = () => (
   <Page>
      <TaskFE />
    </Page>
  );

  return (
    <>
      {render()}
    </>
  );
};

export default TaskFeLayout;
