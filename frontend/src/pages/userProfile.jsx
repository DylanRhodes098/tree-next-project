import React from "react";
import {useState, useEffect} from "react";
import { listProfiles } from "../services/profile";
import { createProfiles } from "../services/profile";

export default function UserProfile () {
    const [err, setErr] = useState("");
        const [profile, setProfile] = useState([]);

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

    return (
        <>
        <h1>userProfile</h1>

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

        <div className="flex gap-2 mt-2">
              <button className="border p-2" onClick={logOutUser}>Logout</button>
            </div>
        </>
    )
}