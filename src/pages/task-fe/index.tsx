import React from "react";
import { Card } from "@shopify/polaris";

import CustomProgress from "../../components/common/custom-progress";
import Introduction from "../../components/common/introduction";

const TaskFE = () => {
    return (
        <>
      <Introduction
        isShowCricle={true}
        isShowLine={true}
        urlCricle="../assets/svgs/circle.fd8c02571a0b67ff452d24fe477fa3ab.svg"
        urlShowline="../assets/svgs/line.b1e8ee4c9a79176536c8498db6056423.svg"
      />
      <CustomProgress maxSteps={3} step={1} />
    </>
    )
};

export default TaskFE;