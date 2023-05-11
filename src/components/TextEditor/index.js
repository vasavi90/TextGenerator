import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  EditorContainer,
  IconContainer,
  Button,
  List,
  TextField,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
    input: '',
  }

  onClickBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  onChangeText = event => {
    this.setState({
      input: event.target.value,
    })
  }

  render() {
    const {bold, italic, underline, input} = this.state
    return (
      <EditorContainer>
        <IconContainer>
          <List>
            <Button
              type="button"
              data-testid="bold"
              onClick={this.onClickBold}
              color={bold}
            >
              <VscBold />
            </Button>
          </List>
          <List>
            <Button
              type="button"
              data-testid="italic"
              onClick={this.onClickItalic}
              color={italic}
            >
              <GoItalic />
            </Button>
          </List>
          <List>
            <Button
              type="button"
              data-testid="underline"
              onClick={this.onClickUnderline}
              color={underline}
            >
              <AiOutlineUnderline />
            </Button>
          </List>
        </IconContainer>
        <TextField
          type="text"
          value={input}
          onChange={this.onChangeText}
          activeBold={bold}
          activeItalic={italic}
          activeUnderLine={underline}
        />
      </EditorContainer>
    )
  }
}
export default TextEditor
