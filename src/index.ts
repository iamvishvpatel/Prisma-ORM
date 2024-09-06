import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.prismaUser.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select:{
            id: true,
            password: true,
            firstName: true
        },
    })
    console.log(res);
}

// insertUser("VishvPatel", "abcdef", "Vishv", "Patel");

// --------- UPDATE PrismaUser Value -----------------------

interface UpdateParams{
    email: string;
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    email,
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.prismaUser.update({
        where: {email: username},
        data: {
            email,
            firstName,
            lastName
        }
    });
    console.log(res);
    
}

updateUser("vishv@mail.com",
    {
        email: "vishv@mail.com",
        firstName: "VPedit1",
        lastName: "PATEL"
    }
)