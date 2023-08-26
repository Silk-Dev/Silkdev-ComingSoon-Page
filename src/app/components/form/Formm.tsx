"use client";
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Space , message, Steps, theme} from 'antd';

const { TextArea } = Input;

import styles from "./form.module.scss"
const Formm: React.FC = () => {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  
  const steps = [
    {
      title: 'First',
      content: 'First-content',
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
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
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
  }, [values]);



  const handleButtonClick = (buttonId:any) => {
  
    if (buttonId === selectedButton) {
  
      setSelectedButton(null);
    } else {
     
      setSelectedButton(buttonId);
    }
  };
  return (
    <>
    <Form  className={styles.form} form={form} name="validateOnly" layout="vertical" autoComplete="off">
   
     <h1 className={styles.h1}>Let's Talk About Your Needs</h1>
      <div className={styles.custominput}>
      <Form.Item className={styles.custominputs} name="name" label={<span className={styles.customlabel}>Name</span>} rules={[{ required: true }]}>
        <Input className={styles.input} placeholder='John from apple'/>
      </Form.Item>
      <Form.Item  className={styles.custominputs} name="age" label={<span className={styles.customlabel}>Age</span>} rules={[{ required: true }]}>
        <Input className={styles.input} placeholder='John@apple.com'/>
      </Form.Item>
      </div>
<h1 className={styles.H1}>I'm intersted in ...</h1>
 <Space wrap className={styles.space}>
  <button
  className={styles.buttons}
  style={{
    backgroundColor: selectedButton === 1 ? "#fff6ea" : "transparent",
   
    
    color: selectedButton === 1 ? "black" : "#fff6ea", 
  }}

    onClick={() => handleButtonClick(1)}
  >
    Default Button 1
  </button>
  <button
  className={styles.buttons}
   style={{
    backgroundColor: selectedButton === 2 ? "#fff6ea" : "transparent",
    color: selectedButton === 2 ? "black" : "#fff6ea",
  }}
    onClick={() => handleButtonClick(2)}
  >
    Default Button 2
  </button>
  <button
  className={styles.buttons}
    style={{
      backgroundColor: selectedButton === 3 ? "white" : "transparent",
      color: selectedButton === 3 ? "black" : "white",
    }}
    onClick={() => handleButtonClick(3)}
  >
    Default Button 3
  </button>
 </Space>
 <h1 className={styles.H2}>Tell us more about your project</h1>
 <TextArea className={styles.textarea}rows={6} placeholder="Something about your great idea" maxLength={255} />

 
 <button
 className={styles.submit}
        type="submit"
        disabled={!submittable}
        style={{
          cursor: submittable ? 'pointer' : 'not-allowed',
        
        }}
      >
        Send
      </button>
 
    </Form>
    <Form  className={styles.mobileform} form={form} name="validateOnly" layout="vertical" autoComplete="off">
    
    
     <h1 className={styles.h1}>Let's Talk About Your Needs</h1>
      <div className={styles.custominput}>
      <Form.Item  className={styles.custominputs} name="name" label={<span className={styles.customlabel}>Name</span>} rules={[{ required: true }]}>
        <Input className={styles.input} placeholder='John from apple'/>
      </Form.Item>
      <Form.Item  className={styles.custominputs} name="age" label={<span className={styles.customlabel}>Age</span>} rules={[{ required: true }]}>
        <Input className={styles.input} placeholder='John@apple.com'/>
      </Form.Item>
      <button
        className={styles.submit}
        type="submit"
        disabled={!submittable}
        style={{
          cursor: submittable ? 'pointer' : 'not-allowed',
        
        }}
      >
        Send
      </button>
      </div>



 
    </Form>
    <div className={styles.mobileslider}>

    </div>
    {/* <div className={styles.mobileform}>
    <p>hello</p>
    </div> */}

    </>
  );
};

export default Formm;
