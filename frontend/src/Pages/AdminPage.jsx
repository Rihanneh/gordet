import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser, fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "../Components/UserList";
import { UserEdit } from "../Components/UserEdit";
import { UserCreate } from "../Components/UserCreate";
import { AppointmentList } from "../Components/AppointmentList";
import { AppointmentEdit } from "../Components/AppointmentEdit";
import { AppointmentCreate } from "../Components/AppointmentCreate";
import { ProjectList } from "../Components/ProjectList";
import { ProjectEdit } from "../Components/ProjectEdit";
import { ProjectCreate } from "../Components/ProjectCreate";
import { MessageList } from "../Components/MessageList";
import { MessageEdit } from "../Components/MessageEdit";
import { MessageCreate } from "../Components/MessageCreate";
import { ImageList } from "../Components/ImageList";
import { ImageEdit } from "../Components/ImageEdit";
import { ImageCreate } from "../Components/ImageCreate";
import { ServiceList } from "../Components/ServiceList";
import { ServiceEdit } from "../Components/ServiceEdit";
import { ServiceCreate } from "../Components/ServiceCreate";
import { UserShow } from "../Components/UserShow";
import { ProjectShow } from "../Components/ProjectShow";
import { MessageShow } from "../Components/MessageShow";
import { AppointmentShow } from "../Components/AppointmentShow";
import { ImageShow } from "../Components/ImageShow";
import { ServiceShow } from "../Components/ServiceShow";

const apiUrl = "http://localhost:3000";
const httpClient = fetchUtils.fetchJson;
const baseProvider = jsonServerProvider(apiUrl, httpClient);

const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file.rawFile);
    });

const dataProvider = {
  ...baseProvider,
  getList: async (resource, params) => {
      if (resource === 'images') {
          const { data, total } = await baseProvider.getList(resource, params);
          const formattedData = data.map(image => ({
              ...image,
              path: `${apiUrl}/${image.path}`
          }));
          return { data: formattedData, total };
      }
      return baseProvider.getList(resource, params)
  },
  getOne: async (resource, params) => {
      if (resource === 'images') {
          const { data } = await baseProvider.getOne(resource, params)
          return { data: {
              ...data,
              path: `${apiUrl}/${data.path}`
          }};
      }
      return baseProvider.getOne(resource, params)
  },
  create: async (resource, params) => {
    // Pour la ressource images, convertir le fichier en base64
    if (resource === 'images' && params.data.path?.rawFile instanceof File) {
      const base64 = await convertFileToBase64(params.data.path);
      return httpClient(`${apiUrl}/${resource}`, {
        method: "POST",
        body: JSON.stringify({
          ...params.data,
          imageContent: base64,
        }),
      }).then(({ json }) => ({ data: json }));
    }
    // Pour les autres ressources, utiliser le comportement par défaut
    return baseProvider.create(resource, params);
  },
  update: async (resource, params) => {
    // Pour la ressource images, convertir le fichier en base64 si présent
    if (resource === 'images' && params.data.path?.rawFile instanceof File) {
      const base64 = await convertFileToBase64(params.data.path);
      return httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          ...params.data,
          imageContent: base64,
        }),
      }).then(({ json }) => ({ data: json }));
    }
    // Si pas de nouveau fichier, utiliser le comportement standard
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "PATCH",
          body: JSON.stringify(params.data),
        })
      )
    ).then((responses) => ({
      data: responses.map(({ json }, index) => json?.id ?? json?.data?.id ?? params.ids[index]),
    })),
};

export default function AdminPage() {
  return (
    <Admin basename="/admin" dataProvider={dataProvider}>
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} />
      <Resource name="projects" list= {ProjectList} edit= {ProjectEdit} create= {ProjectCreate} show={ProjectShow} />
      <Resource name="messages" list= {MessageList} edit= {MessageEdit} create= {MessageCreate} show={MessageShow} />
      <Resource name="appointments" list= {AppointmentList} edit= {AppointmentEdit} create= {AppointmentCreate} show={AppointmentShow} />
      <Resource name="images" list= {ImageList} edit= {ImageEdit} create= {ImageCreate} show={ImageShow} />
      <Resource name="services" list= {ServiceList} edit= {ServiceEdit} create= {ServiceCreate} show={ServiceShow} />
    </Admin>
  );
}
