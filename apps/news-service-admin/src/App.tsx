import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ArticleList } from "./article/ArticleList";
import { ArticleCreate } from "./article/ArticleCreate";
import { ArticleEdit } from "./article/ArticleEdit";
import { ArticleShow } from "./article/ArticleShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"NewsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Article"
          list={ArticleList}
          edit={ArticleEdit}
          create={ArticleCreate}
          show={ArticleShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
