import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  Toolbar,
  StyledButton,
  Textarea,
  Container,
  SmallImage,
  CardContainer,
  TextContainer,
} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  toggleStyle = style => {
    this.setState(prevState => ({[style]: !prevState[style]}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <Container>
        <TextContainer>
          <CardContainer>
            <h1>Text Editor</h1>
            <SmallImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </CardContainer>
          <div className="tool-container">
            <Toolbar>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <li>
                  <StyledButton
                    active={isBold}
                    onClick={() => this.toggleStyle('isBold')}
                    data-testid="bold"
                  >
                    <VscBold />
                  </StyledButton>
                </li>
                <li>
                  <StyledButton
                    active={isItalic}
                    onClick={() => this.toggleStyle('isItalic')}
                    data-testid="italic"
                  >
                    <GoItalic />
                  </StyledButton>
                </li>
                <li>
                  <StyledButton
                    active={isUnderline}
                    onClick={() => this.toggleStyle('isUnderline')}
                    data-testid="underline"
                  >
                    <AiOutlineUnderline />
                  </StyledButton>
                </li>
              </ul>
            </Toolbar>

            <Textarea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
              placeholder="Type your text here ..."
            />
          </div>
        </TextContainer>
      </Container>
    )
  }
}

export default TextEditor
