import { Button, Frame, Modal } from '@shopify/polaris';
import { useState, useCallback } from 'react';

// ModalStep1 component
function ModalStep1({ active, handleChange }:{active: boolean, handleChange: () => void}) {
  const activator = <Button onClick={handleChange}>Open</Button>;

  return (
    <div style={{ height: '500px' }}>
      <Frame>
        <Modal
          activator={activator}
          open={active}
          onClose={handleChange}
          title="Enable the App embed instructions"
          secondaryActions={[
            {
              content: 'Close',
              onAction: handleChange,
            },
          ]}
        >
          <Modal.Section>
            <img src='https://d37eo6c2bs4tyq.cloudfront.net/pixel2/static/media/instructions.048343bb9ec1e3157cc71e3c53844b86.svg' style={{width:"100%"}}></img>
          </Modal.Section>
        </Modal>
      </Frame>
    </div>
  );
}

export default ModalStep1;
