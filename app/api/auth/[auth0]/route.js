import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth();

// {
//     async login(req, res) {
//         try {
//             await handleLogin(req, res, {
//                 returnTo: "/dashboard" // Yeh path user ko redirect karne ke liye hai login ke baad
//             });
//         } catch (error) {
//             res.status(error.status || 500).end(error.message);
//         }
//     }
// }