import {
	InteractionOutlined,
    HistoryOutlined,
	VideoCameraOutlined,
	UploadOutlined
} from "@ant-design/icons";
export const SData = [
    {
        key: 1,
        title:"Movimientos",
        icon:<InteractionOutlined />,
        path:"/"
    },
    {
        key: 2,
        title:"Notificaciones",
        icon:<VideoCameraOutlined />,
        path:"/monitoreo"
    },
    {
        key: 3,
        title:"Historial",
        icon:<HistoryOutlined />,
        path:"/bitacora"
    },
    {
        key: 4,
        title:"Ajustes",
        icon:<UploadOutlined />,
        path:"/diagnostico"
    }
    ,
    {
        key: 5,
        title:"Acerca de",
        icon:<UploadOutlined />,
        path:"/diagnostico"
    }
];