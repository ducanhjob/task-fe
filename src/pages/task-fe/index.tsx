import React from "react";
import { Page } from "@shopify/polaris";

//Summary components
import { Introduction } from "../../components/introduction";
import { Onboarding } from "../../components/on-boarding";
import { AppEmbedStep } from "../../components/steps/app-embed-step";
import { FacebookPixelStep } from "../../components/steps/facebook-pixel-step";
import { useOnboardingStore } from "../../stores/on-boarding";

const OnboardingPage = () => {
    
    return (
            <Onboarding />
    );
}

export default OnboardingPage;