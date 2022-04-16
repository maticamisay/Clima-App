import AppClima from "./Layouts/AppClima"
import { ClimaProvider } from './context/ClimaProvider'
import Header from "./Layouts/Header"
function App() {

  return (
    <ClimaProvider>
      <Header />
      <AppClima />

    </ClimaProvider>
  )
}

export default App
