import styles from './page.module.css';
import Container from './components/atoms/container';
import Expand from './components/atoms/expand';
import Row from './components/atoms/row';
import Column from './components/atoms/column';

export default function Home() {
  return (
    <main className={ styles.main }>
      <Expand center>
        {/* <Row> */}
        <Column>
          <div style={{ backgroundColor: "black", width: "100px", height: "100px" }}></div>
          <div style={{ backgroundColor: "black", width: "100px", height: "100px" }}></div>
        </Column>
        {/* </Row> */}
      </Expand>
    </main>
  )
}
