import { useState } from 'react'
import axios from 'axios'

const TestForm = (props) => {
    const [text, setText] = useState('데이터 전송 준비')

    const sendToServer = async () => {
      const url = "http://127.0.0.1:8000/api/articles/"
      try {
          const response = await axios.get(url)
          console.log(response.data)
          setText(response.data['message'])
      } catch (error) {
          console.error('Error during signup:', error.response.data.error)
      }
    }

    return (
        <div>
            <button onClick={sendToServer}>Send</button>
            <p>{text}</p>
        </div>
    )
}

export default TestForm
