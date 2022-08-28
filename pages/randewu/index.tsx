import {
  Button,
  Card,
  Input,
  Modal,
  Radio,
  Row,
  Spacer,
} from '@nextui-org/react';
import Head from 'next/head';
import React, { useRef, useState } from 'react';

const index = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const closeModalHandler = () => {
    setSubmitSuccess(false);
  };

  return (
    <>
      <Head>
        <title>Randka z Arturem</title>
      </Head>

      <section className="w-fit m-auto bg-black bg-opacity-60 rounded-3xl text-slate-100 my-2 md:my-8 mx-2 md:mx-auto p-2 md:p-4">
        <h1 className="text-center text-2xl underline mb-4 md:mb-8">
          Gotowa/wy na szubi dubi riki tiki?
        </h1>

        <Card className="w-fit m-auto p-4 md:p-8">
          <Card.Body>
            <form className="m-auto my-4" ref={formRef}>
              <Row wrap="nowrap" align="center" justify="center">
                <Input
                  clearable
                  color="primary"
                  underlined
                  labelPlaceholder="Imię"
                />
                <Spacer x={1} />
                <Input
                  required
                  clearable
                  color="primary"
                  underlined
                  labelPlaceholder="Nazwisko"
                />
              </Row>
              {/* ////////////////////// */}
              <Spacer y={2} />
              <Row wrap="nowrap" align="center" justify="center">
                <Input
                  required
                  className="w-24 md:w-auto"
                  color="primary"
                  rounded
                  bordered
                  labelPlaceholder="Wiek"
                  type="number"
                  min="12"
                  max="16"
                />

                <Spacer x={2} />

                <Radio.Group label="Płeć" defaultValue="female" isRequired>
                  <Radio
                    value="male"
                    color="error"
                    labelColor="error"
                    size="sm"
                  >
                    Mężczyzna
                  </Radio>
                  <Radio
                    value="female"
                    color="success"
                    labelColor="success"
                    size="sm"
                  >
                    Kobieta
                  </Radio>
                </Radio.Group>
              </Row>
              {/* ////////////////////// */}
              <Spacer y={2} />
              <Row wrap="nowrap" align="center" justify="center">
                <Input
                  required
                  type="date"
                  label="Data"
                  color="primary"
                  initialValue={new Date().toLocaleDateString('en-ca')}
                />

                <Spacer x={1} />
                <Input
                  required
                  type="time"
                  label="Godzina"
                  color="primary"
                  initialValue="21:37"
                />
              </Row>
              {/* ////////////////////// */}
              <Spacer y={2} />
              <Row wrap="nowrap" align="flex-start" justify="center">
                <Input
                  required
                  label="Link do Instagrama"
                  type="url"
                  placeholder="www.instagram.com/jp2"
                  bordered
                  color="secondary"
                />
              </Row>
              {/* ////////////////////// */}
              <Spacer y={2} />
              <Row justify="center">
                <label className="text-sky-600 text-sm">
                  Login i hasło do Facebooka
                </label>
              </Row>
              <Spacer y={0.5} />
              <Row
                className="flex-wrap md:flex-nowrap justify-start md:justify-center"
                align="center"
              >
                <Input
                  required
                  aria-label="facebook-login"
                  labelLeft="login"
                  placeholder="MarekLewarek45"
                  className="mb-2 md:mb-0"
                />
                <Spacer x={1} />
                <Input.Password
                  required
                  aria-label="facebook-password"
                  clearable
                  labelLeft="hasło"
                  placeholder="420 2137"
                />
              </Row>

              <Spacer y={3} />
              <Button
                bordered
                flat
                onClick={async () => {
                  setTimeout(() => {
                    setSubmitSuccess(true);
                    formRef.current?.reset();
                  }, 200);
                }}
                className="w-full"
              >
                Prześlij zgłoszenie
              </Button>
            </form>
          </Card.Body>
        </Card>

        <Modal
          blur
          closeButton
          aria-labelledby="modal-submit-success"
          open={submitSuccess}
          onClose={closeModalHandler}
          className="p-4 md:p-8"
        >
          <Modal.Header>
            <h1 className="text-2xl text-green-500">
              Pomyślnie wysłano zgłoszenie do Arturcia
            </h1>
          </Modal.Header>
          <Modal.Body>
            <span className="text-xl">
              Zgłoszenie zostało wysłane, odezwiemy się do Ciebię - może (raczej
              na to nie licz)
            </span>
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
      </section>
    </>
  );
};

export default index;
