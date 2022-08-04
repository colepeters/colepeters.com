import { Header } from '../components'
import setTitle from '../utils/setTitle'

export default function Index() {
  return (
    <>
      {setTitle()}
      <Header />
    </>
  )
}
