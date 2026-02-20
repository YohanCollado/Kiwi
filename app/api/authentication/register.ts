import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import bcrypt from 'bcrypt'
import { NextApiHandler, NextApiResponse } from "next";

export default async function handler(req: NextApiHandler, res: NextApiResponse){
    if(req.method !== 'POST')
        return res.status(405).end();

    const {email, password} = req.body;

    try{
        //hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create the user
        const user = await prisma.user.create({
            data: {
                email, 
                password: hashedPassword,
            },
        });

        return res.status(201).json({id: user.id, email: user.email });
    } catch (err:any){
        if(err.code === 'P2002') { //unique constraint error
            return res.status(400).json({error: 'Email already exists'});
        }
        return res.status(500).json({error: 'Interval server error'});
    }
}