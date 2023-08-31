"use client";
import React, { useState, useEffect } from 'react';
import { Form, ConfigProvider, Input, Space, Steps, theme } from 'antd';
import { SendOutlined } from '@ant-design/icons'
import styles from "./form.module.scss"
import SubMsg from '../subMsg/SubMsg';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from '@/app/config';

const db = getFirestore(app);

const { TextArea } = Input;
const Formm: React.FC = () => {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);
  const [viewForm, setViewForm] = useState(true);
  const [isError, setError] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [option, setOptions] = useState(0);
  const [step, setStep] = useState('one');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    msg: '',
  });
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
    console.log(submittable);
    
  }, [values, form]);

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,

    }));
  };

  const handleSubmit= async () => {
    try {
      setSubmitted(true);
      setTimeout(() => {
        setViewForm(false);
      }, 2000)
      const colRef = collection(db, "formData");
      const docRef = await addDoc(colRef, formData);
      return docRef;
      

    } catch (error) {
      throw error;
    }
    
    if (option > 0) {
      setStep('three');
      setCurrent(current + 1);

    } else {
      // add a better way to handle this
      // console.log('set option please', option)
    }
  };

  const handleButtonClick = (buttonId: any, selectedOption: any) => {
    setOptions(buttonId)
    setFormData((prevData) => ({
      ...prevData,
      project: selectedOption,

    }));
    setSelectedButton(buttonId);
  };

  return (
    <>
      {viewForm &&
        <Form className={styles.form} form={form} name="validateOnly" layout="vertical" autoComplete="off">
          <h1 className={styles.h1}>Let&apos;s Talk About Your Needs</h1>
          <div className={styles.custominput}>
            <Form.Item className={styles.custominputs} name="name" label={<span className={styles.customlabel}>Name & company</span>} rules={[{ required: false }]}>
              <Input className={styles.input} placeholder='John from apple'
                value={formData.name}
                name="name"
                onChange={handleChange} />
            </Form.Item>
            <Form.Item className={styles.custominputs} name="email" label={<span className={styles.customlabel}>Email</span>} rules={[{ required: false }]}>
              <Input className={styles.input} type="email" placeholder='John@apple.com'
                value={formData.email}
                name="email"
                onChange={handleChange} />
            </Form.Item>
          </div>
          <h1 className={styles.H1}>I&apos;m intersted in ...</h1>
          <Space wrap className={styles.space}>
            <button
              value={formData.project}
              id='1'
              name="project"
              className={selectedButton === 1 ? styles.buttons : styles.notSelected}
              onChange={handleChange}
              onClick={() => handleButtonClick(1, "showcase")}
            >
              Showcase Website
            </button>
            <button
              value="commerce"
              name="project"
              onChange={handleChange}
              className={selectedButton === 2 ? styles.buttons : styles.notSelected}
              onClick={() => handleButtonClick(2, "commerce")}
            >
              E-commerce website
            </button>
            <button
              className={selectedButton === 3 ? styles.buttons : styles.notSelected}
              value={formData.project}
              name="project"
              onChange={handleChange}
              onClick={() => handleButtonClick(3, "branding")}
            >
              Brand consultation service
            </button>
          </Space>
          <h1 className={styles.H2}>Tell us more about your project</h1>
          <TextArea
            className={styles.textarea}
            rows={6} placeholder="Something about your great idea"
            maxLength={255}
            name="msg"
            value={formData.msg}
            onChange={handleChange}
          />

          {!isSubmitted &&
          <button
          className={styles.submit}
          type="submit"
          value={formData.project}
          onChange={handleChange}
          onClick={handleSubmit}
          disabled={!submittable}
          style={{
            cursor: submittable ? 'pointer' : 'not-allowed', fontSize: "18px", fontWeight: "500",marginTop:"15px"

          }}
        >
          
          <SendOutlined style={{ marginRight: '10px', fontSize: "20px", rotate: "-35deg", marginBottom: "100px",marginTop:"15px" }} />Send
        </button>
          }
          {isSubmitted && 
          <button  type="button" className={styles.submit}>
          <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
          </svg>
          Loading...
      </button>
          }
          
        </Form>
      }


      <div className={styles.mobileslider}>
        {viewForm &&
          <ConfigProvider
            theme={{
              components: {
                Steps: {
                  colorText: '#FFF6EA',

                  colorPrimary: '#BB3E03',
                  titleLineHeight: 20,
                  customIconSize: 40,
                  customIconTop: 0,
                  customIconFontSize: 32,
                  iconSize: 20,
                  iconTop: 0, 
                  iconFontSize: 12,
                  iconSizeSM: 16,
                  dotSize: 20,
                  dotCurrentSize: 24,
                  navArrowColor: '#163CFF',
                  navContentMaxWidth: 100,
                  descriptionMaxWidth: 100,
                },
              },
            }}
          >
            <h1 className={styles.h1}>Let&apos;s Talk About Your Needs</h1>

            <Steps responsive={false} className={styles.stepsvertical} current={current} items={items} /></ConfigProvider>
        }

        <div style={contentStyle}>
          {viewForm && step == 'one' &&
            <Form className={styles.mobileform} form={form} name="validateOnly" layout="vertical" autoComplete="off">

              <div className={styles.custominput}>
                <Form.Item className={styles.custominputs} name="name" label={<span className={styles.customlabel}>Name & company</span>} rules={[{ required: false }]}>
                  <Input className={styles.input} placeholder='John from apple'
                    value={formData.name}
                    name="name"
                    onChange={handleChange} />
                </Form.Item>
                <Form.Item className={styles.custominputs} name="email" label={<span className={styles.customlabel}>Email</span>} rules={[{ required: false }]}>
                  <Input className={styles.input} type="email" placeholder='John@apple.com'
                    value={formData.email}
                    name="email"
                    onChange={handleChange} />
                </Form.Item>
                <button
                  className={styles.submit}
                  type="submit"
                  disabled={!submittable}
                  onClick={() => { setStep('two'); setCurrent(current + 1); }}
                  style={{
                    cursor: submittable ? 'pointer' : 'not-allowed', marginBottom: "100px",

                  }}
                >
                  Next
                </button>
              </div>
            </Form>
          }
          {viewForm && step == 'two' &&
            <Form className={styles.mobileform} form={form} name="validateOnly" layout="vertical" autoComplete="off">
              <h1 className={styles.H1}>I&apos;m intersted in ...</h1>
              <Space wrap className={styles.space}>
                <button
                  value={formData.project}
                  name="project"
                  onChange={handleChange}
                  className={selectedButton === 1 ? styles.buttons : styles.notSelected}

                  onClick={() => { handleButtonClick(1, "showcase"); setOptions(1) }}
                >
                  Showcase Website
                </button>
                <button
                  value={formData.project}
                  name="project"
                  onChange={handleChange}
                  className={selectedButton === 2 ? styles.buttons : styles.notSelected}
                  onClick={() => { handleButtonClick(2, "commerce"); setOptions(2) }}
                >
                  E-commerce website
                </button>
                <button
                  value={formData.project}
                  name="project"
                  onChange={handleChange}
                  className={selectedButton === 3 ? styles.buttons : styles.notSelected}
                  onClick={() => { handleButtonClick(3, "branding"); setOptions(3) }}
                >
                  Brand consultation service
                </button>
              </Space>
              <button
                className={styles.submit}
                type="submit"
                disabled={!submittable}
                onClick={() => { setStep('three'); setCurrent(current + 1); }}
                style={{
                  cursor: submittable ? 'pointer' : 'not-allowed', marginBottom: "100px", marginTop: "30px",

                }}
              >
                Next
              </button>
            </Form>
          }
          {viewForm && step == 'three' &&
            <Form className={styles.mobileform} form={form} name="validateOnly" layout="vertical" autoComplete="off">
              <h1 className={styles.H2}>Tell us more about your project</h1>
              <TextArea className={styles.textarea} rows={6} placeholder="Something about your great idea" maxLength={255}
                name="msg"
                value={formData.msg}
                onChange={handleChange} />
              {!isSubmitted &&
          <button
          className={styles.submit}
          type="submit"
          value={formData.project}
          onChange={handleChange}
          onClick={handleSubmit}
          disabled={!submittable}
          style={{
            cursor: submittable ? 'pointer' : 'not-allowed', fontSize: "18px", fontWeight: "500",marginTop:"10px"

          }}
        >
          
          <SendOutlined style={{ marginRight: '10px', fontSize: "20px", rotate: "-35deg", marginBottom: "100px",marginTop:"10px" }} />Send
        </button>
          }
          {isSubmitted && 
          <button  type="button" className={styles.submit}>
          <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-black animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
          </svg>
          Loading...
      </button>
          }
            </Form>

          }
        </div>
      </div>
      {!viewForm &&
        <SubMsg result={isError} />
      }
    </>
  );
};

export default Formm;
