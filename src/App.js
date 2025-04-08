import CurrentUserLoader from "./components/current-user-loader";
import ResourceLoader from "./components/resource-loader";
import { UserInfo } from "./components/user-info";
import { BookInfo } from "./components/book-info";
import UserLoader from "./components/user-loader";
import DataSourceLoader from "./components/data-source";
import axios from "axios";

function App() {
  return (
    <>
      <DataSourceLoader getData={async () => {
        const response = await axios.get('/users/1');
        console.log(response)
        return response.data
      }}
        resourceName={'user'}>
        <UserInfo />
      </DataSourceLoader>
    </>
  );
}

export default App;
