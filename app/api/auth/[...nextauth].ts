import { config } from '@/app/actions/auth';
import NextAuth from 'next-auth';
import { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = config

export default NextAuth(authOptions)
