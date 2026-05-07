import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser, fetchUtils } from "react-admin";
import { houseLightTheme, houseDarkTheme } from "ra-ui-materialui";
import polyglotI18nProvider from "ra-i18n-polyglot";
import frenchMessages from "ra-language-french";
import { AdminLayout } from "../Components/AdminLayout";
import PeopleIcon from "@mui/icons-material/People";
import YardIcon from "@mui/icons-material/Yard";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import CollectionsIcon from "@mui/icons-material/Collections";
import SpaIcon from "@mui/icons-material/Spa";
import jsonServerProvider from "ra-data-json-server";
import { authProvider } from "../authProvider";
import { AdminLoginPage } from "../Components/AdminLoginPage";
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


const i18nProvider = polyglotI18nProvider(() => ({
    ...frenchMessages,
    resources: {
        users: { name: "Utilisateur |||| Utilisateurs", fields: { email: "Email", password: "Mot de passe", createdAt: "Créé le", updatedAt: "Modifié le" } },
        projects: { name: "Projet |||| Projets", fields: { title: "Titre", slug: "Slug", description: "Description", date: "Date", imageIds: "Images" } },
        messages: { name: "Message |||| Messages", fields: { firstName: "Prénom", lastName: "Nom", email: "Email", subject: "Sujet", message: "Message", createdAt: "Reçu le" } },
        appointments: { name: "Rendez-vous |||| Rendez-vous", fields: { firstName: "Prénom", lastName: "Nom", email: "Email", phone: "Téléphone", date: "Date", status: "Statut", message: "Message", createdAt: "Créé le" } },
        images: { name: "Image |||| Images", fields: { title: "Titre", path: "Fichier", alt: "Texte alternatif", createdAt: "Ajoutée le" } },
        services: { name: "Prestation |||| Prestations", fields: { title: "Titre", slug: "Slug", content: "Contenu", imageId: "Image" } },
    },
}), "fr");

const apiUrl = import.meta.env.VITE_API_URL;

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('auth_token');
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    return fetchUtils.fetchJson(url, options);
};

const baseProvider = jsonServerProvider(apiUrl, httpClient);

const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file.rawFile);
    });

const toImageResource = (image) => {
    if (!image) {
        return image;
    }
    const absolutePath = image.path?.startsWith('http') ? image.path : `${apiUrl}/${image.path}`;
    return {
        ...image,
        src: absolutePath,
        title: image.title ?? image.path ?? `image-${image.id}`,
    };
};

const dataProvider = {
  ...baseProvider,
  getList: async (resource, params) => {
      if (resource === 'images') {
          const { data, total } = await baseProvider.getList(resource, params);
          const formattedData = data.map(image => ({
              ...image,
              path: `${apiUrl}/${image.path}`,
              src: `${apiUrl}/${image.path}`,
          }));
          return { data: formattedData, total };
      }
      if (resource === 'projects') {
          const { data, total } = await baseProvider.getList(resource, params);
          const formattedData = data.map(project => ({
              ...project,
              imageIds: project.imageIds ?? [],
              images: (project.images ?? []).map(toImageResource),
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
              path: `${apiUrl}/${data.path}`,
              src: `${apiUrl}/${data.path}`,
          }};
      }
      if (resource === 'projects') {
          const { data } = await baseProvider.getOne(resource, params);
          return {
              data: {
                  ...data,
                  imageIds: data.imageIds ?? [],
                  images: (data.images ?? []).map(toImageResource),
              },
          };
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

const emptyOverride = {
    components: {
        RaEmpty: {
            styleOverrides: {
                root: {
                    display: 'block',
                    width: '100%',
                    '& .RaEmpty-message': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    },
                },
            },
        },
    },
};

const theme = { ...houseLightTheme, components: { ...houseLightTheme.components, ...emptyOverride.components } };
const darkTheme = { ...houseDarkTheme, components: { ...houseDarkTheme.components, ...emptyOverride.components } };

export default function AdminPage() {
  return (
    <Admin basename="/admin" dataProvider={dataProvider} authProvider={authProvider} layout={AdminLayout} i18nProvider={i18nProvider} loginPage={AdminLoginPage} theme={theme} darkTheme={darkTheme}>
      <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} show={UserShow} icon={PeopleIcon} />
      <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} show={ProjectShow} icon={YardIcon} />
      <Resource name="messages" list={MessageList} edit={MessageEdit} create={MessageCreate} show={MessageShow} icon={EmailIcon} />
      <Resource name="appointments" list={AppointmentList} edit={AppointmentEdit} create={AppointmentCreate} show={AppointmentShow} icon={EventIcon} />
      <Resource name="images" list={ImageList} edit={ImageEdit} create={ImageCreate} show={ImageShow} icon={CollectionsIcon} />
      <Resource name="services" list={ServiceList} edit={ServiceEdit} create={ServiceCreate} show={ServiceShow} icon={SpaIcon} />
    </Admin>
  );
}
