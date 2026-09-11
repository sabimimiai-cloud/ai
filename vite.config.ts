import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function photoSaverPlugin(): Plugin {
  return {
    name: 'photo-saver-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/save-cropped-photo' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const { filename, dataUrl } = JSON.parse(body);
              if (!filename || !dataUrl) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Missing filename or dataUrl' }));
                return;
              }
              const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(base64Data, 'base64');
              const publicImgDir = path.join(process.cwd(), 'public', 'images');
              if (!fs.existsSync(publicImgDir)) {
                fs.mkdirSync(publicImgDir, { recursive: true });
              }
              const targetPath = path.join(publicImgDir, filename);
              fs.writeFileSync(targetPath, buffer);

              const distImgDir = path.join(process.cwd(), 'dist', 'images');
              if (fs.existsSync(distImgDir)) {
                fs.writeFileSync(path.join(distImgDir, filename), buffer);
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, filename, url: `/images/${filename}` }));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: String(err) }));
            }
          });
          return;
        }

        if (req.url === '/api/check-extracted-photos' && req.method === 'GET') {
          const publicImgDir = path.join(process.cwd(), 'public', 'images');
          let files: string[] = [];
          if (fs.existsSync(publicImgDir)) {
            files = fs.readdirSync(publicImgDir);
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ files }));
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoSaverPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
