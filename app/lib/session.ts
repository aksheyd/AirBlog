// import { jwtVerify } from 'jose';

// const secretKey = process.env.SESSION_SECRET;
// const encodedKey = new TextEncoder().encode(secretKey);

// export async function decrypt(session: string | undefined = '') {
//   try {
//     const { payload } = await jwtVerify(session, encodedKey, {
//       algorithms: ['HS256'], // specify the algorithm you used when signing the JWT
//     });

//     return payload; // Return the decoded payload
//   } catch (error) {
//     console.error('Failed to verify session', error);
//     return null; // Return null if verification fails
//   }
// }