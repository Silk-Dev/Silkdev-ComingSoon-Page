"use client";
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Space, message, Steps, theme } from 'antd';
import { SendOutlined } from '@ant-design/icons'
const { TextArea } = Input;

import styles from "./form.module.scss"
import { log } from 'console';
const Formm: React.FC = () => {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);
  const [option, setOptions] = useState(0);
  const [step, setStep] = useState('one');
  const [selectedButton, setSelectedButton] = useState(null);

  const steps = [
    {
      title: 'First',
      content: 'first-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    marginTop: 16,
  };

  const values = Form.useWatch([], form);



  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
    console.log('val', values);
    console.log(submittable);

  }, [values]);



  const handleButtonClick = (buttonId: any) => {

    if (buttonId === selectedButton) {

      setSelectedButton(null);
    } else {

      setSelectedButton(buttonId);
    }
  };

  return (
    <>
      <Form className={styles.form} form={form} name="validateOnly" layout="vertical" autoComplete="off">
        <h1 className={styles.h1}>Let&apos;s Talk About Your Needs</h1>
        <div className={styles.custominput}>
          <Form.Item className={styles.custominputs} name="name" label={<span className={styles.customlabel}>Name</span>} rules={[{ required: true }]}>
            <Input className={styles.input} placeholder='John from apple' />
          </Form.Item>
          <Form.Item className={styles.custominputs} name="email" label={<span className={styles.customlabel}>Email</span>} rules={[{ required: true }]}>
            <Input className={styles.input} type="email" placeholder='John@apple.com' />
          </Form.Item>
        </div>
        <h1 className={styles.H1}>I&apos;m intersted in ...</h1>
        <Space wrap className={styles.space}>
          <button
            className={styles.buttons}
            style={{
              backgroundColor: selectedButton === 1 ? "#fff6ea" : "transparent",


              color: selectedButton === 1 ? "black" : "#fff6ea",
            }}

            onClick={() => { handleButtonClick(1); setOptions(1) }}
          >
            Showcase Website
          </button>
          <button
            className={styles.buttons}
            style={{
              backgroundColor: selectedButton === 2 ? "#fff6ea" : "transparent",
              color: selectedButton === 2 ? "black" : "#fff6ea",
            }}
            onClick={() => { handleButtonClick(2); setOptions(2) }}
          >
            E-commerce website
          </button>
          <button
            className={styles.buttons}
            style={{
              backgroundColor: selectedButton === 3 ? "white" : "transparent",
              color: selectedButton === 3 ? "black" : "white",
            }}
            onClick={() => { handleButtonClick(3); setOptions(3) }}
          >
            Brand consultation service
          </button>
        </Space>
        <h1 className={styles.H2}>Tell us more about your project</h1>
        <TextArea className={styles.textarea} rows={6} placeholder="Something about your great idea" maxLength={255} />


        <button
          className={styles.submit}
          type="submit"
          disabled={!submittable}
          style={{
            cursor: submittable ? 'pointer' : 'not-allowed', fontSize: "18px", fontWeight: "500"

          }}
        >
          <SendOutlined style={{ marginRight: '10px', fontSize: "20px", rotate: "-35deg" }} />Send
        </button>

      </Form>

      <div className={styles.mobileslider}>
        <Steps className={styles.stepsvertical} current={current} items={items} />
        <div style={contentStyle}>
          {step == 'one' &&
            <Form className={styles.mobileform} form={form} name="validateOnly" layout="vertical" autoComplete="off">
              <h1 className={styles.h1}>Let&apos;s Talk About Your Needs</h1>
              <div className={styles.custominput}>
                <Form.Item className={styles.custominputs} name="name" label={<span className={styles.customlabel}>Name</span>} rules={[{ required: true }]}>
                  <Input className={styles.input} placeholder='John from apple' />
                </Form.Item>
                <Form.Item className={styles.custominputs} name="email" label={<span className={styles.customlabel}>Email</span>} rules={[{ required: true }]}>
                  <Input className={styles.input} type="email" placeholder='John@apple.com' />
                </Form.Item>
                <button
                  className={styles.submit}
                  type="submit"
                  disabled={!submittable}
                  onClick={() => { setStep('two'); setCurrent(current + 1); }}
                  style={{
                    cursor: submittable ? 'pointer' : 'not-allowed',

                  }}
                >
                  Next
                </button>
              </div>
            </Form>
          }
          {step == 'two' &&
            <>
              <h1 className={styles.H1}>I&apos;m intersted in ...</h1>
              <Space wrap className={styles.space}>
                <button
                  className={styles.buttons}
                  style={{
                    backgroundColor: selectedButton === 1 ? "#fff6ea" : "transparent",


                    color: selectedButton === 1 ? "black" : "#fff6ea",
                  }}

                  onClick={() => { handleButtonClick(1); setOptions(1) }}
                >
                  Showcase Website
                </button>
                <button
                  className={styles.buttons}
                  style={{
                    backgroundColor: selectedButton === 2 ? "#fff6ea" : "transparent",
                    color: selectedButton === 2 ? "black" : "#fff6ea",
                  }}
                  onClick={() => { handleButtonClick(2); setOptions(2) }}
                >
                  E-commerce website
                </button>
                <button
                  className={styles.buttons}
                  style={{
                    backgroundColor: selectedButton === 3 ? "white" : "transparent",
                    color: selectedButton === 3 ? "black" : "white",
                  }}
                  onClick={() => { handleButtonClick(3); setOptions(3) }}
                >
                  Brand consultation service
                </button>
              </Space>
              <button
                className={styles.submit}
                type="submit"
                disabled={!submittable}
                onClick={() => {
                  if (option > 0) {
                    setStep('three'); setCurrent(current + 1)
                  } else { console.log('set option please', option) }
                }}
                style={{
                  cursor: submittable ? 'pointer' : 'not-allowed',

                }}
              >
                Next
              </button>
            </>
          }
          {step == 'three' &&
            <div>
              <h1 className={styles.H2}>Tell us more about your project</h1>
              <TextArea className={styles.textarea} rows={6} placeholder="Something about your great idea" maxLength={255} />
              <button
                className={styles.submit}
                type="submit"
                style={{
                  cursor: submittable ? 'pointer' : 'not-allowed', fontSize: "18px", fontWeight: "500"
                }}
              >
                <SendOutlined style={{ marginRight: '10px', fontSize: "20px", rotate: "-35deg" }} />Send
              </button>
            </div>
          }
        </div>
        {/* <div  style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
      </div>


    </>
  );
};

export default Formm;
