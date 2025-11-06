import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {logout as logOut} from "../services/auth";
import { listGroups } from "../services/groups";
import { createGroup } from "../services/groups";
import { listProfiles } from "../services/profile";
import { createProfiles } from "../services/profile";
import React from 'react';
import { Card, Space } from 'antd';

export default function Home () {
    const navigate = useNavigate();
    const [err, setErr] = useState("");
    const [profile, setProfile] = useState([]);
    const [group, setGroup] = useState([]); 
    const [form, setForm] = useState(""); 

     async function retrieveGroups () {
        setErr("");
        try {
            const data = await listGroups();
            setGroup (data);
        } catch (error) {
            setErr(error?.response?.data?.error || "failed retriveing Groups" );
        }
     }

     async function createGroups (e) {
        e.preventDefault();
        setErr("");
        try {
            const payload = { name, linkedin, whatsapp, instagram, snapchat, tiktok, notes };
            const data = await createGroup(payload);
            setGroup(existinggroups => [...existinggroups, data]);

        } catch (error) {
            setErr(error?.response?.data?.error || "failed retriveing Groups" );
        }
     }

     async function retrieveProfile () {
        setErr("");
        try{
            const data = await listProfiles();
            setProfile(data);
        } catch (error) {
            setErr(error?.response?.data?.error || "failed retriveing Profiles")
        }
     }

     async function createProfile (e) {
        e.preventDefualt();
        setErr("");
        try {
            const payload = {full_name, address, mobile_number, email, date_of_birth, linkedin, whatsapp, snapchat, tiktok};
            const data = await createProfiles(payload);
            setProfile(currentProfile => [...currentProfile, data]);
        } catch (error) {
            setErr(error?.response?.data?.error || "failed creating Profile");
        }
     }

     useEffect (() => {
        (async () => {
            await retrieveGroups();
            await retrieveProfile();
        })(); 
    }, []);


     function warningMessage () {
        if (!err) {
            return null;
        } else {
            return <p style={{ color: "crimson" }}>{err}</p>
        }
     }

     return (
        <>
        <div className=""> 

            <Space direction="vertical" size={16}>
    <Card title="Groups" extra={<a href="#">More</a>} style={{ }}>
    {warningMessage()}
            <ul className="mt-4">
                {Array.isArray(group) && group.length > 0 ? (
                    group.map((g) => (
                        <div key={g.id}>
                        <li className="text-lg">Group Name:{g.name}</li>
                        <li className="text-lg">Linkedin: {g.linkedin}</li>
                        <li className="text-lg">Whatsapp: {g.whatsapp}</li>
                        <li className="text-lg">Snapchat: {g.snapchat}</li>
                        <li className="text-lg">Instagram: {g.instagram}</li>
                        <li className="text-lg">TikTok: {g.tiktok}</li>
                        <li className="text-lg">Notes: {g.notes}</li>
                        </div>
                    ))
                ) : (
                    <li className="text-sm text-gray-500">No groups loaded</li>
                )}
            </ul><br></br>
            </Card>
            </Space>
            <ul>
                {Array.isArray(profile) && profile.length > 0 ? (
                profile.map((p) => (
                    <div className="" key={p.id}>
                        <li className="">{p.full_name}</li>
                        <li className="">{p.address}</li>
                        <li className="">{p.mobile_number}</li>
                        <li className="">{p.email}</li>
                        <li className="">{p.date_of_birth}</li>
                        <li className="">{p.linkedin}</li>
                        <li className="">{p.whatsapp}</li>
                        <li className="">{p.snapchat}</li>
                        <li className="">{p.tiktok}</li>
                    </div>
                ))
            ) : (
                <li className="text-sm text-gray-500">No profile loaded</li>
            )}
                </ul>
                </div>
        </>
     )

}
