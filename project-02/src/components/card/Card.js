import { Button } from "../button/Button";
import styles from "./card.module.css";
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import {useState} from "react";

export const Card = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")

  const submit=(e)=>{
    e.preventDefault();
    console.log("I am submit",name,email,text)
  }
  return (
    <div className={styles.container}>
      
        <div className={styles.flex_container}>
         
          <div className={styles.top_btn}>
          <Button title="VIA SUPPORT CHAT" icon={<IoMdMail fontSize={25} />} />
          <Button title="VIA CALL" icon={<BiSolidPhoneCall fontSize={25} />} />
          </div>
         <Button  white={true} title="VIA EMAIL FORM" icon={<IoMdMail fontSize={25}/>}/>
          
          <form onSubmit={submit}>
      <div className={styles.form}>
            <label htmlFor="name">Name</label>
              <input type="text" id='name' onChange={(e)=>setName(e.target.value)} value={name} name='name'/>
     
          
              </div>
      <div className={styles.form}>
            <label htmlFor="email">Email</label>
              <input type="email" id='email' onChange={(e)=>setEmail(e.target.value)} value={email} name='email'/>
     
          
              </div>
      <div className={styles.form}>
            <label htmlFor="text">Text</label>
              <textarea row="5" id='text' value={text} onChange={(e)=>setText(e.target.value)} name='text'/>
     
          
              </div>
              <div className={styles.submit}>

              
              <Button title="SUBMIT"  />
              </div>
          </form>
          </div>
          
       
        <div>
          <img src="/images/contact.svg" alt="" />
        </div>
      </div>
   
  );
};

{
}
