import { useMemo } from "react";
import { Page } from "@shopify/polaris";
import rootStore from "../stores/root";

import TaskFE from "./task-fe";
const TaskFeLayout = () => {
 const { title} = rootStore();
  const render = () => (
   <Page title={title}>
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
