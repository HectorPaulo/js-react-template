import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import SwitchCameraOutlinedIcon from '@mui/icons-material/SwitchCameraOutlined';
import SwitchLeftOutlinedIcon from '@mui/icons-material/SwitchLeftOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';

const Menuitems = [
  {
    title: "Principal",
    icon: DashboardOutlinedIcon,
    href: "/dashboards/dashboard1",
  },
  {
    title: "Agregar servicio",
    icon: AddToPhotosOutlinedIcon,
    href: "/form-elements/autocomplete",
  },
  {
    title: "Buscar por etiqueta",
    icon: AspectRatioOutlinedIcon,
    href: "/form-elements/button",
  },
  {
    title: "Servicios cerca",
    icon: AssignmentTurnedInOutlinedIcon,
    href: "/form-elements/checkbox",
  },
  {
    title: "Centro de ayuda",
    icon: AlbumOutlinedIcon,
    href: "/form-elements/radio",
  },
  {
    title: "Opiniones",
    icon: SwitchCameraOutlinedIcon,
    href: "/form-elements/slider",
  },
  {
    title: "Recientes",
    icon: SwitchLeftOutlinedIcon,
    href: "/form-elements/switch",
  },
  {
    title: "Finanzas",
    icon: DescriptionOutlinedIcon,
    href: "/form-layouts/form-layouts",
  },
  {
    title: "Mascotas",
    icon: AutoAwesomeMosaicOutlinedIcon,
    href: "/tables/basic-table",
  },
];

export default Menuitems;
