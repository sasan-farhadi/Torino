module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
                pathname: '**',
            },
        ],
    },
}



// module.exports = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'http',
//                 hostname: 'localhost',
//                 port: '3000', // مشخص کردن پورت برای localhost
//                 pathname: '**',
//             },
//             {
//                 protocol: 'http',
//                 hostname: 'localhost',
//                 port: '6500', // مشخص کردن پورت برای localhost
//                 pathname: '**',
//             },
//         ],
//     },
// }
