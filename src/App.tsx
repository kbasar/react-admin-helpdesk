import KitchenIcon from "@mui/icons-material/Kitchen";
import { Box } from "@mui/material";
import { ContainerLayout } from "@react-admin/ra-navigation";
import { Search } from "@react-admin/ra-search";
import {
  Admin,
  RefreshIconButton,
  Resource,
  localStorageStore,
} from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";

import { ConnectionWatcher } from "./ConnectionWatcher";
import { authProvider } from "./authProvider";
import customers from "./customers";
import { dataProvider } from "./dataProvider";
import products from "./products";
import tickets from "./tickets";

const MyLayout = (props: any) => (
  <>
    <ContainerLayout
      {...props}
      maxWidth="xl"
      toolbar={
        <Box display="flex" gap={1} mr={1}>
          <Search />
          <RefreshIconButton />
        </Box>
      }
    />
    <ReactQueryDevtools initialIsOpen={false} />
    <ConnectionWatcher />
  </>
);

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    store={localStorageStore(undefined, "HelpDesk")}
    title={
      <Box display="flex" gap={1} alignItems="center">
        <KitchenIcon /> Acme Refrigerator HelpDesk
      </Box>
    }
    layout={MyLayout}
  >
    <Resource name="tickets" {...tickets} />
    <Resource name="customers" {...customers} />
    <Resource name="products" {...products} />
    <Resource
      name="agents"
      recordRepresentation={(record) =>
        `${record.firstName} ${record.lastName}`
      }
    />
  </Admin>
);

export default App;
