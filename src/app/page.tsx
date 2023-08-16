import styles from './page.module.css';
import Container from './components/atoms/container';
import Text from './components/atoms/text';
import Column from './components/atoms/column';
import TextEditor from './components/organism/text-editor';

export default function Home() {
  return (
    <main className={styles.main}>
      <Container
        width="100vw" height="100vh" backColor='ff0000' center >
        <Column width="50%" height='100%' center >
          <TextEditor />
        </Column>
        <Column width="50%" height='100%' backColor='0000ff' center >
          <Text text='Right side' />
        </Column>
      </Container>
    </main>
  )
}
