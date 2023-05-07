import TextEditor from './components/TextEditor'

import './App.css'

// Replace your code here
const App = () => (
  <div className="app-container">
    <div className="container">
      <div className="heading-container">
        <h1 className="heading">Text Editor</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
          className="image"
        />
      </div>
      <TextEditor />
    </div>
  </div>
)

export default App
