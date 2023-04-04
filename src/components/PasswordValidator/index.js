// Write your code here
import {useState} from 'react'
import {MainContainer, Text, StatusText, Input} from './styledComponents'

const Unlock = () => {
  const [text, setText] = useState('')

  return (
    <MainContainer>
      <Text>Password Validator</Text>
      <StatusText>Check how strong and secure is your password</StatusText>
      <Input
        value={text}
        type="password"
        onChange={e => setText(e.target.value)}
      />

      {text.length > 8 ? null : (
        <StatusText>Your password must be at least 8 characters</StatusText>
      )}
    </MainContainer>
  )
}

export default Unlock
