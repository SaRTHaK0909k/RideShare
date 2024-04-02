'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/router"
import  {useState} from 'react'

export default function LoginPage(){
    const [email,setEmail] = ('')
    const [password,setPassword] = ('')
    const router = useRouter()
    const supabase=createClientComponentClient();

    const handleSignUp=async()=>{
        await supabase.auth.signUp({
            email,
            password,
            options:{
                emailRedirectTo:`${location.origin}/auth/callback`
            }
        })
        router.refresh();
    }

    const handleSignIn = async ()
}