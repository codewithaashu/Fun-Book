import { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

//messageform me ek form bnana hn jisme input area hoga,imagebutton,filebutton,sendbutton
const MessageForm =(props)=>{
    const {chatId,creds} = props;
    const [msg,setMsg] = useState("");
    //msge ko set kr dega aur jb tk likhenge tb tk typing dikhayega
    const handleChange=(e)=>{
        setMsg(e.target.value)
        isTyping(props,chatId);
    }

    const handleSubmit = (e)=>{
        //msge me unwanted spaces ko trim kre 
        const text = msg.trim();
        //submit krne pe browser ki default refresh behaviour ko prevent kre
        e.preventDefault();
        //agr msge ki length 0 se jyda hn tb msge send kro 
        if(text.length>0)sendMessage(creds,chatId,{text});
        //input area ko fir se pehle jaisa bna do
        setMsg("");
    }

    const handleUpload =(e)=>{
        sendMessage(creds,chatId,{files:e.target.files,text:""})
    }
    //form hoga jisko submit krne pr ek function run ho
    return(
    <form className="message-form" onSubmit={handleSubmit}>
        {/* message area hoga jisme likhne pr handleChange function */}
        <input type="text" className="message-input" placeholder="Type your Message" value={msg} onChange={handleChange}/>
        {/* image button */}
        <label htmlFor="upload-button">
            <span className="imageButton">
                <PictureOutlined className="picture-icon"/>
            </span>
        </label>
        {/* file button */}
        <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      {/* send button */}
      <button type="submit" className="send-button">
            <SendOutlined className="send-icon"/>
      </button>
    </form>
    )
};
export default MessageForm;