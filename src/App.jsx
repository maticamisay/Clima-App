import AppClima from "./Layouts/AppClima"
import { ClimaProviderÂ } from './context/ClimaProvider'
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
