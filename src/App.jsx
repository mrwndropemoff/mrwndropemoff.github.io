import "./App.css";
import { CustomersLayer } from "./layers/CustomersLayer";
import { DownloadLayer } from "./layers/DownloadLayer";
import PageHeader from "./layers/PageHeader";
import { PageMain } from "./layers/PageMain";
import { PageService } from "./layers/PageService";
import { ProvidersLayer } from "./layers/ProvidersLayer";

function App() {
  return (
    <div>
      <PageHeader />
      <PageMain />
      <PageService />
      <ProvidersLayer />
      <DownloadLayer />

      <CustomersLayer />
    </div>
  );
}

export default App;
