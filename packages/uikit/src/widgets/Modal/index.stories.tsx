import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Modal, useModal } from ".";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import { ModalProps } from "./types";

export default {
  title: "Widgets/Modal",
  component: Modal,
  argTypes: {},
};

const CustomModal: React.FC<React.PropsWithChildren<ModalProps>> = ({ title, onDismiss, ...props }) => (
  <Modal title={title} onDismiss={onDismiss} {...props}>
    <Heading>{title}</Heading>
    <Button>This button Does nothing</Button>
  </Modal>
);

export const Default: React.FC<React.PropsWithChildren> = () => {
  const theme = useTheme();
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />);
  const [onPresent2] = useModal(<CustomModal title="Modal 2" />);
  const [onPresent3] = useModal(<CustomModal title="Modal 3" headerBackground={theme.colors.gradientCardHeader} />);
  return (
    <div>
      <Button onClick={onPresent1}>Open modal 1</Button>
      <Button onClick={onPresent2}>Open modal 2</Button>
      <Button onClick={onPresent3}>Open modal with background</Button>
    </div>
  );
};

export const DisableOverlayClick: React.FC<React.PropsWithChildren> = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />, false);

  return (
    <div>
      <Button onClick={onPresent1}>Disabled overlay click</Button>
    </div>
  );
};

export const WithBackButton: React.FC<React.PropsWithChildren> = () => {
  const BackButtonModal: React.FC<React.PropsWithChildren<ModalProps>> = ({ title, onDismiss }) => {
    const handleOnBack = () => {
      return 1;
    };

    return (
      <Modal title={title} onDismiss={onDismiss} onBack={handleOnBack} hideCloseButton>
        <Button onClick={onDismiss} style={{ backgroundColor: '#8B0000' }} variant="text">
          Consumer can still close it.
        </Button>
      </Modal>
    );
  };

  const [onPresent1] = useModal(<BackButtonModal title="Modal with no X" />, false);

  return <Button onClick={onPresent1}>Only Back Button</Button>;
};

export const WithCustomHeader: React.FC<React.PropsWithChildren> = () => {
  const CustomHeaderModal: React.FC<React.PropsWithChildren<ModalProps>> = ({ title, onDismiss }) => {
    return (
      <Modal title={title} headerBackground="primary" onDismiss={onDismiss}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pretium massa. Donec et gravida eros, eget
        sollicitudin sapien. Donec imperdiet lorem nulla, at hendrerit purus lacinia ut. Phasellus rhoncus justo in
        tincidunt cursus. Fusce vulputate, enim id facilisis faucibus, justo nunc consectetur nibh, sit amet euismod
        ante mauris ut est. Vestibulum eu ligula eu erat eleifend imperdiet et eu nulla. Curabitur sodales ullamcorper
        nibh sed sagittis. Integer a elit nec nisl cursus vehicula eu a nibh. Donec posuere tortor id egestas ultrices.
        Aliquam in eros eros. Maecenas fringilla enim varius, fringilla lectus ut, finibus sapien. Phasellus ac
        vulputate libero, id vehicula massa. Ut dignissim lorem ut risus accumsan feugiat. Quisque odio mi, sollicitudin
        non elementum nec, tristique non est. Sed faucibus ante hendrerit viverra volutpat. Proin et enim nec ipsum
        sodales suscipit eu nec lacus. Nulla consequat volutpat scelerisque. Phasellus ligula orci, dictum quis commodo
        et, tempor quis ligula. Pellentesque eget dapibus leo. Aliquam in ipsum vehicula, suscipit ipsum nec, viverra
        mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pretium massa. Donec et gravida eros,
        eget sollicitudin sapien. Donec imperdiet lorem nulla, at hendrerit purus lacinia ut. Phasellus rhoncus justo in
        tincidunt cursus. Fusce vulputate, enim id facilisis faucibus, justo nunc consectetur nibh, sit amet euismod
        ante mauris ut est. Vestibulum eu ligula eu erat eleifend imperdiet et eu nulla. Curabitur sodales ullamcorper
        nibh sed sagittis. Integer a elit nec nisl cursus vehicula eu a nibh. Donec posuere tortor id egestas ultrices.
        Aliquam in eros eros. Maecenas fringilla enim varius, fringilla lectus ut, finibus sapien. Phasellus ac
        vulputate libero, id vehicula massa. Ut dignissim lorem ut risus accumsan feugiat. Quisque odio mi, sollicitudin
        non elementum nec, tristique non est. Sed faucibus ante hendrerit viverra volutpat. Proin et enim nec ipsum
        sodales suscipit eu nec lacus. Nulla consequat volutpat scelerisque. Phasellus ligula orci, dictum quis commodo
        et, tempor quis ligula. Pellentesque eget dapibus leo. Aliquam in ipsum vehicula, suscipit ipsum nec, viverra
        mauris.
        <Button>This button Does nothing</Button>
      </Modal>
    );
  };

  const [onPresent1] = useModal(<CustomHeaderModal title="Modal with custom header" />);
  return <Button onClick={onPresent1}>Modal with custom header</Button>;
};

export const ReactingToOutsideChanges: React.FC<React.PropsWithChildren> = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);
  const ReactiveModal: React.FC<React.PropsWithChildren<ModalProps & { count: number }>> = ({
    title,
    count,
    onDismiss,
  }) => {
    return (
      <Modal title={title} onDismiss={onDismiss}>
        <h2>Counter: {count}</h2>
        <Button mt="8px" onClick={onDismiss} style={{ backgroundColor: '#8B0000' }}>
          Close
        </Button>
      </Modal>
    );
  };

  const [onPresent1] = useModal(
    <ReactiveModal title={`[${counter}] Modal that reacts to outside change`} count={counter} />,
    true,
    true,
    "reactiveModal"
  );

  const [onPresent2] = useModal(
    <ReactiveModal title={`[${counter}] Modal that does NOT react to outside change`} count={counter} />
  );
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <Button onClick={onPresent1}>Reactive modal</Button>
      <Button ml="16px" onClick={onPresent2}>
        Non-reactive modal
      </Button>
    </div>
  );
};
