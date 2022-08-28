import { Button, Modal, Text, Image } from '@nextui-org/react';
import React, { PropsWithChildren, useState } from 'react';

const CarModal: React.FC<
  PropsWithChildren & {
    title: string;
    imgSrc: string;
    imgLink: string;
    author: string;
  }
> = (props) => {
  const [visible, setVisible] = useState(false);

  const openModalHandler = () => {
    setVisible(true);
  };

  const closeModalHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <div onClick={openModalHandler}>{props.children}</div>

      <Modal
        className="m-4 md:m-auto cursor-default content-none"
        blur
        width="40rem"
        closeButton
        aria-labelledby={props.title}
        open={visible}
        onClose={closeModalHandler}
      >
        <Modal.Header>
          <Text id="modal-title" b size={24}>
            {props.title}
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Image src={props.imgSrc} />
          <Text size={16}>
            Photo by{' '}
            <a
              href={`https://unsplash.com/${props.author}`}
              target="_blank"
              className="text-cyan-500"
            >
              {props.author}
            </a>{' '}
            on{' '}
            <a href={props.imgLink} target="_blank" className="text-cyan-500">
              Unsplash
            </a>
          </Text>
        </Modal.Body>

        <Modal.Footer>
          <Button
            rounded
            bordered
            shadow
            auto
            color="error"
            onClick={closeModalHandler}
          >
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CarModal;
