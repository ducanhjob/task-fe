import React from "react";
import { Text } from "@shopify/polaris";

import "./style.css";
import rootStore from "../../../stores/root";

interface IntroductionProps {
    isShowLine: boolean;
    urlShowline: string;
    isShowCricle: boolean;
    urlCricle: string;
}

const Introduction: React.FC<IntroductionProps> = ({ isShowLine, isShowCricle, urlShowline, urlCricle }) => {
    const { description } = rootStore();
    return (
        <div className="introduction">
            <div className="introduction_title">
                <p>
                    <span className="itergrate">Seamlessly intergrate
                        {isShowLine ? <img src={urlShowline} alt="showline" /> : null}
                    </span>
                    <span>your Facebook Pixel </span>
                    <span className="single-step">a single step
                        {isShowCricle ? <img src={urlCricle} alt="cricle" /> : null}
                    </span>
                </p>
            </div>
            <Text as="p" variant="headingSm">
                {description}
            </Text>
        </div>
    );
}

export default Introduction;