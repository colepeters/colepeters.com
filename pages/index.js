import setTitle from '../utils/setTitle'
import { Header } from '../components'

export default function Index() {
  return (
    <>
      {setTitle()}
      <Header />
    </>
  )
}
