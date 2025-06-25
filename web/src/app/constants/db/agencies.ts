import { AgencyEntity } from "@/features/agency/@types/agency.type";

export const agencies:AgencyEntity[] = [
    {
        id:"1",
        name:"Teste - 1",
        phone:123456789,
        latitude:-8.813712998902261,
        longitude:13.245744115092592,
        type:"lotaria-nacional",
        location_text:"Cruzeiro",
        createdAt:new Date()
    },
    {
        id:"2",
        name:"Teste - 2",
        phone:123456789,
        latitude:-8.819229939295457,
        longitude:13.224325495627742,
        type:"arreiou",
        location_text:"Cidade Alta",
        createdAt:new Date()
    },
    {
        id:"3",
        name:"Teste - 3",
        phone:123456789,
        latitude:-8.821711842282692,
        longitude:13.237797982265947,
        type:"elephant-bet",
        location_text:"Maculusso",
        createdAt:new Date()
    }
]