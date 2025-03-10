module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.18.97.149:8000', // 后端地址
                changeOrigin: true,
              

            },
        },
    },
};