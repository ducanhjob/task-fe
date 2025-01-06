import { Text } from '@shopify/polaris'
export function Introduction() {
    return (
        <div style={{fontSize: '18px', lineHeight: '24px',fontWeight:'bold'}}>
            <div className="onboarding-v2"><p className="">
                <span style={{position:'relative',fontWeight:'bold'}}>Seamlessly integrate
                    <img style={{position:'absolute',top:'19px',left:'0px'}} src="https://d37eo6c2bs4tyq.cloudfront.net/pixel2/static/media/line.b1e8ee4c9a79176536c8498db6056423.svg" alt="line" />
                </span>   <span style={{position:'relative',fontWeight:'bold'}}>your Facebook Pixel in </span>
                <span style={{fontWeight:'bold'}}> a single step
                <img style={{position:'absolute',top:'10px',left:'385px'}}src="https://d37eo6c2bs4tyq.cloudfront.net/pixel2/static/media/circle.fd8c02571a0b67ff452d24fe477fa3ab.svg" alt="circle" />
                </span>
            </p>
            </div>
            <div style={{ paddingTop: '10px' }}>
                <Text variant="bodyMd" as="p">
                    We will guide you through setting up Facebook Pixel. Please follow each step in the instructions to ensure a smooth process. You can explore on your own at any time.
                </Text>
            </div>
        </div>
    )
}