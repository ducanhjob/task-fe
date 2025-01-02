import React from 'react';
import { useState, useCallback } from 'react';
import { InlineGrid, Icon, Collapsible, Text } from '@shopify/polaris';
import { CheckIcon } from '@shopify/polaris-icons';

interface StepOneProps {
    title: string;
    isCompleted: boolean;
}

const StepOne: React.FC<StepOneProps> = ({ title, isCompleted }) => {
    const [open, setOpen] = useState(true);
    const handleToggle = useCallback(() => setOpen((open) => !open), []);

    return (
        <div className="flex hover:bg-[#F9F9F9] transition-all cursor-pointer gap-2">
            <div className="pl-5 py-4">
                <div>
                    <Icon source={CheckIcon} />
                </div>
            </div>
            <div className="flex-1 py-4 pr-5">
                <div onClick={handleToggle}>
                    <Text as="h3" variant='headingMd'>
                        {title}
                    </Text>
                </div>
                <Collapsible
                    open={open}
                    id="basic-collapsible"
                    transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
                    expandOnPrint
                >
                </Collapsible>
            </div>
        </div>
    );
}