import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt';
var jwt = require('jsonwebtoken');

const prisma = new PrismaClient()


export default async function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return false
    }
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email
      },
    })
      
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if(isMatch) {
        var token = jwt.sign({ user: user.id }, 'shhhhh');
        res.send({token: token,userId: user.id, message: 'You successfully logged in!'})
      } else {
        res.status(404).send()
      }
    
}
      
      


