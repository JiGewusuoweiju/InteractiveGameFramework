import { createServer } from 'node:http';

// 仅供骨架验证；正式服务的认证、路由和数据库在 M3 实现。
const server = createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (request.method === 'GET' && request.url === '/health') {
    response.end(JSON.stringify({ status: 'skeleton', database: 'not-connected' }));
    return;
  }
  response.statusCode = 404;
  response.end(JSON.stringify({ error: { code: 'NOT_FOUND', message: '接口尚未实现' } }));
});
server.listen(Number(process.env.PORT ?? 3000), '127.0.0.1');
