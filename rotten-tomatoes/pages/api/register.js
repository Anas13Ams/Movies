import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient()


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return false
  }
  
  
  //checking if someone have used the email
  
  const checkIfExist = await prisma.user.findUnique({
      where: {
          email : req.body.email
      }
  })
  console.log(checkIfExist);
  if(checkIfExist) return res.status(409).send({message: "Email already used"})
  else {
  //hash password
  const salt = await bcrypt.genSalt();
  const password = req.body.password;
  const hash = await bcrypt.hash(password, salt);
  req.body.password = hash;

  // create user
  const user = await prisma.user.create({data:req.body})
  
  //response back to auth.service
  res.status(201).send({ message: 'You successfully registered!',user})
 
  }
}

  
