import Container from "../../atoms/container"
import Text from "../../atoms/text"

interface IProps {}

const TextEditor = ({}: IProps) => {
    return (
        <Container 
            center
            margin="5vw"
            width="100%"
            height="100%"
            backColor='333'
            borderRadius="23px">
            <Text text='Header icons' />  
            <Text text='Input field' />  
        </Container>
    )
}

export default TextEditor;
