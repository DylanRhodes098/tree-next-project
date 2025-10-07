import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {logout as logOut} from "../services/auth";
import { listGroups } from "../services/groups";
import { createGroup } from "../services/groups";
import { listProfiles } from "../services/profile";
import { createProfiles } from "../services/profile";

export default function Home () {
    const navigate = useNavigate();
    const [err, setErr] = useState("");
    const [profile, setProfile] = useState([]);
    const [group, setGroup] = useState([]); 
    const [form, setForm] = useState(""); 

     function logOutUser (e) {
         e.preventDefault();
         setErr("");
         try {
            logOut();
            navigate("/login", {replace: true} );
         } catch (error) {
             setErr(error?.response?.data?.error || "logOut failed" );
         }
     }

     async function retrieveGroups (e) {
        e.preventDefault();
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
            <h1 className="text-2xl">Groups</h1>
            {warningMessage()}
            <div className="flex gap-2 mt-2">
              <button className="border p-2" onClick={retrieveGroups}>Load Groups</button>
              <button className="border p-2" onClick={logOutUser}>Logout</button>
            </div>
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
            </ul>
        </div>
        
        </>
     )

}


    