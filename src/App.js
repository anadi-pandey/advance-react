import CurrentUserLoader from "./components/current-user-loader";
import ResourceLoader from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
import { BookInfo } from "./components/book-info";
import UserLoader from "./components/user-loader";
import DataSourceLoader from "./components/data-source";
import axios from "axios";
import DataSourceRenderLoader from "./components/data-source-render-props";

function App() {
  return (
    <>
      <DataSourceRenderLoader getData={async () => {
        const response = await axios.get('/users/1');
        console.log(response)
        return response.data
      }}
       render={(resource) =>  <UserInfo user={resource}/> }>
       
      </DataSourceRenderLoader>
    </>
  );
}

export default App;
