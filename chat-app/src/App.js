import React from 'react';
import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './Component/ChatFeed';
import LoginForm from './Component/LoginForm';
import './App.css';
const projectID='33017ce2-6c16-4a44-8782-99d073275689'
const App =()=> {
	if (!localStorage.getItem('username')) return <LoginForm />;
	return (
		<ChatEngine
			height='100vh'
			projectID={projectID}
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
      //you can render your own chat feed componet by which user can send or reiceve msge . we also give a props
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>

	);
}
export default App;