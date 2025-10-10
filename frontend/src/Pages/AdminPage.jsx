import { Admin, Resource, ShowGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "../Components/UserList";
import { UserEdit } from "../Components/UserEdit";
import { UserCreate } from "../Components/UserCreate";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export default function AdminPage() {
  return (
    <Admin basename="/admin" dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={ShowGuesser} />
    </Admin>
  );
}
