"use client";
import React, { useState, useEffect } from 'react';
import { Form,ConfigProvider, Input, Button, Space , message, Steps, theme} from 'antd';
import { SendOutlined } from '@ant-design/icons'
import styles from "./form.module.scss"
import { SendEmail } from '@/actions/SendEmail';
import SubMsg from '../subMsg/SubMsg';
import { log } from 'console';

const { TextArea } = Input;
const Formm: React.FC = () => {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);
  const [viewForm, setViewForm] = useState(true);
  const [isError, setError] = useState(false);
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
    console.log('val',values);
    console.log(submittable);
    
  }, [values]);

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      
    }));
  };
  
  const handleSubmit= async () => {
    console.log('data',formData);
    
    const { data, error } = await SendEmail(formData);

          if (error) {
            console.log(error);
            setViewForm(false);
            setError(true)
            return;
          }
          else {
            console.log("Email sent successfully!");
            setError(false)
            setViewForm(false);
            
          }
    if (option > 0){
      setStep('three');
      setCurrent(current + 1);
      
     }else {console.log('set option please',option)}
  };

  const handleButtonClick = (buttonId:any,selectedOption:any) => {
    setOptions(buttonId)
    setFormData((prevData) => ({
      ...prevData,
      project: selectedOption,
      
    }));
    if (buttonId === selectedButton) {
      
      setSelectedButton(null);
    } else {
     
      setSelectedButton(buttonId);
    }
  };
 
  return (
    <>
{viewForm && 
   <Form  className={styles.form} form={form} name="validateOnly" layout="vertical" autoComplete="off">
   <h1 className={styles.h1}>Let's Talk About Your Needs</h1>
   <div className={styles.custominput}>
   <Form.Item className={styles.custominputs} name="name" label={<span className={styles.customlabel}>Name & company</span>} rules={[{ required: false }]}>
     <Input className={styles.input} placeholder='John from apple'
     value={formData.name}
     name="name"
     onChange={handleChange}/>
   </Form.Item>
   <Form.Item  className={styles.custominputs}  name="email" label={<span className={styles.customlabel}>Email</span>} rules={[{ required: false }]}>
     <Input className={styles.input} type="email" placeholder='John@apple.com'
     value={formData.email}
     name="email"
     onChange={handleChange}/>
   </Form.Item>
   </div>
<h1 className={styles.H1}>I'm intersted in ...</h1>
<Space wrap className={styles.space}>
<button
value={formData.project}
name="project"
className={styles.buttons}
onChange={handleChange}
style={{
 backgroundColor: selectedButton === 1 ? "#fff6ea" : "transparent",
 color: selectedButton === 1 ? "black" : "#fff6ea", 
}}

 onClick={() => handleButtonClick(1,"showcase")}
>
 Showcase Website
</button>
<button
className={styles.buttons}
value="commerce"
name="project"
onChange={handleChange}
style={{
 backgroundColor: selectedButton === 2 ? "#fff6ea" : "transparent",
 color: selectedButton === 2 ? "black" : "#fff6ea",
}}
 onClick={() => handleButtonClick(2,"commerce")}
>
 E-commerce website
</button>
<button
 className={styles.buttons}
 value={formData.project}
 name="project"
 onChange={handleChange}
 style={{
   backgroundColor: selectedButton === 3 ? "white" : "transparent",
   color: selectedButton === 3 ? "black" : "white",
 }}
 onClick={() => handleButtonClick(3,"branding")}
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


<button
className={styles.submit}
     type="submit"
     value={formData.project}
     onChange={handleChange}
     onClick={handleSubmit}
     disabled={!submittable}
     style={{
       cursor: submittable ? 'pointer' : 'not-allowed',fontSize:"18px",fontWeight:"500"
     
     }}
   >
     <SendOutlined style={{marginRight:'10px',fontSize:"20px",rotate:"-35deg",marginBottom:"100px"}}/>Send
   </button>

 </Form>
}

    
  <div className={styles.mobileslider}>
    {viewForm &&
    <ConfigProvider
    theme={{
      components: {
        Steps: {
          colorText:'#FFF6EA',
          
          colorPrimary:'#BB3E03',
          titleLineHeight: 20,
          customIconSize: 40,
          customIconTop: 0,
          customIconFontSize: 32,
          iconSize: 20,
          iconTop: 0, // magic for ui experience
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
  <h1 className={styles.h1}>Let's Talk About Your Needs</h1> 

  <Steps responsive={false}className={styles.stepsvertical} current={current} items={items}  /></ConfigProvider>
    }
  
      <div  style={contentStyle}>
 {viewForm &&  step =='one' &&
   <Form className={styles.mobileform} form={form} name="validateOnly" layout="vertical" autoComplete="off">
   
 <div className={styles.custominput}>
   <Form.Item className={styles.custominputs} name="name" label={<span className={styles.customlabel}>Name & company</span>} rules={[{ required: false }]}>
        <Input className={styles.input} placeholder='John from apple'
        value={formData.name}
        name="name"
        onChange={handleChange}/>
      </Form.Item>
   <Form.Item  className={styles.custominputs}  name="email" label={<span className={styles.customlabel}>Email</span>} rules={[{ required: false }]}>
        <Input className={styles.input} type="email" placeholder='John@apple.com'
        value={formData.email}
        name="email"
        onChange={handleChange}/>
      </Form.Item>
   <button
     className={styles.submit}
     type="submit"
     disabled={!submittable}
     onClick={()=>{setStep('two');setCurrent(current + 1);}}
     style={{
       cursor: submittable ? 'pointer' : 'not-allowed',marginBottom:"100px",
     
     }}
   >
     Next
   </button>
   </div>
 </Form>
 }
 {viewForm && step =='two' &&
 <Form className={styles.mobileform} form={form} name="validateOnly" layout="vertical" autoComplete="off">
   <h1 className={styles.H1}>I'm intersted in ...</h1>
 <Space wrap className={styles.space}>
  <button
  value={formData.project}
  name="project"
  className={styles.buttons}
  onChange={handleChange}
  style={{width:' 100%',
    backgroundColor: selectedButton === 1 ? "#fff6ea" : "transparent",
    color: selectedButton === 1 ? "black" : "#fff6ea", 
  }}

  onClick={() => {handleButtonClick(1,"showcase");setOptions(1)}}
  >
    Showcase Website
  </button>
  <button
  className={styles.buttons}
   value={formData.project}
   name="project"
   onChange={handleChange}
   style={{
    backgroundColor: selectedButton === 2 ? "#fff6ea" : "transparent",
    color: selectedButton === 2 ? "black" : "#fff6ea",
  }}
  onClick={() => {handleButtonClick(2,"commerce");setOptions(2)}}
  >
    E-commerce website
  </button>
  <button
  className={styles.buttons}
    value={formData.project}
    name="project"
    onChange={handleChange}
    style={{
      backgroundColor: selectedButton === 3 ? "white" : "transparent",
      color: selectedButton === 3 ? "black" : "white",
    }}
    onClick={() => {handleButtonClick(3,"branding");setOptions(3)}}
  >
    Brand consultation service
  </button>
 </Space>
   <button
     className={styles.submit}
     type="submit"
     disabled={!submittable}
     onClick={()=>{setStep('three');setCurrent(current + 1);}}
     style={{
       cursor: submittable ? 'pointer' : 'not-allowed',marginBottom:"100px",marginTop:"30px",
     
     }}
   >
     Next
   </button>
   </Form>
 }
 {viewForm && step =='three' &&
 <Form className={styles.mobileform} form={form} name="validateOnly" layout="vertical" autoComplete="off">
 <h1 className={styles.H2}>Tell us more about your project</h1>
<TextArea className={styles.textarea}rows={6} placeholder="Something about your great idea" maxLength={255} 
name="msg"
value={formData.msg}
onChange={handleChange}/>
<button
  className={styles.submit}
  type="submit"
     style={{
       cursor: submittable ? 'pointer' : 'not-allowed',fontSize:"18px",fontWeight:"500"
     }}
>
  <SendOutlined onChange={handleChange}
        onClick={handleSubmit} style={{marginRight:'10px',fontSize:"20px",rotate:"-35deg",marginBottom:"100px"}}/>Send
</button>
</Form>

 }
      </div>
</div>
  {!viewForm &&
  <SubMsg result={isError}/>
  }
   
    </>
  );
};

export default Formm;
