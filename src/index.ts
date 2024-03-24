import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstname: string, lastname: string) {
  const res = await prisma.user.create({
    data: {
        email,
        password,
        firstname,
        lastname
    },
    select: {
        id: true,
        password: true,
        firstname: true
    }
  })
  console.log(res);
}

insertUser("admin1", "123456", "satyam", "mishra")


async function updateUser(username: string, {
    firstname,
    lastname
}: any){
    const res = await prisma.user.update({
        where: {email: username},
        data: {
            firstname,
            lastname
        }
    })
    console.log(res);
}
updateUser("admin1",{
    firstname: "sam",
    lastname: "mishra"
})
