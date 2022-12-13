import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';
//we don't need to write import react from react in react 17 or upper version
const ChatFeed = (props) => {
    // we get argument from chat engine
    // console.log(props); //for what we get from props
    //we destructuring the props
    const { activeChat, chats, messages, userName } = props;
    // if we have a chat then active chat 
    const chat = chats && chats[activeChat]; // activeChat = 96481
    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
          key={`read_${index}`}
          className="read-receipt"
          style={{
            float: isMyMessage ? 'right' : 'left',
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
          }}
        />
      ));
    const renderMessages = () => {
        //fetch message and give an array
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username;
            return (
                <div key={index} style={{ width: "100%" }}>
                    <div className="message-block">
                        {isMyMessage ? <MyMessage message={message} /> : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }
    if (!chat) return <div />;
    return (
        //In chat feed - chat title-container(title,subtitle),messageContainer(myMsg,theirMsg),messageFor(inputbox,photo,file,send btn)
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat.title}
                    {/* <img src={chat.people[0].person.avatar} alt="Avatar" width={"42px"} style={{borderRadius:"50%"}} /> */}
                </div>
                <div className="chat-subtitle">
                    {chat.people[0].person.username}
                </div>
            </div>
            {/* Messge will be render */}
            {renderMessages()}
            {/* ab yha pe message form conatiner bnana hn jisme typing and send button ho */}
            <div className="message-form-container">
                <MessageForm {...props} chatId ={activeChat}/>
            </div>
        </div>
    )
}
export default ChatFeed;