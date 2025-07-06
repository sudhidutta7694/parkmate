import NextAuth from 'next-auth'
import { authOptions } from '@parkmate/network/src/config/authOptions'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
