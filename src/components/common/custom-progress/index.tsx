import { ProgressBar, Text } from "@shopify/polaris";
import React from "react";

import "./style.css";

interface CustomProgressProps {
    maxSteps: number;
    step: number;
}

const CustomProgress: React.FC<CustomProgressProps> = ({ step, maxSteps }) => {
    return (
        <div className="flex items-center gap-3">
            <Text variant="headingXs" as="h6">
                {step} of {maxSteps} steps completed
            </Text>
            <ProgressBar
                progress={(step / maxSteps) * 100}
                animated={true}
                tone="primary"
                size="small"
            />
        </div>
    )
};

export default CustomProgress;