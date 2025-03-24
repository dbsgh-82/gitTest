function MessageArea({msgs}) {
  const messages = msgs.map(msg => <li key={Math.random()}>{msg}</li>)
  return (
    <div className='message-area'>
        <h3>발생로그:</h3>
        <ul>
            {messages}
        </ul>
    </div>
  )
}

export default MessageArea