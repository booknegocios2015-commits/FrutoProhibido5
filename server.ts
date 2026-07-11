import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: AI Concierge Chat powered by Gemini
  app.post('/api/concierge/chat', async (req: Request, res: Response) => {
    try {
      const { messages } = req.body;

      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: 'La conversación (messages) es requerida y debe ser un arreglo.' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(500).json({ 
          error: 'Servicio de asistencia temporalmente no disponible (GEMINI_API_KEY no configurada). Por favor configure los Secrets en el panel.' 
        });
        return;
      }

      // Initialize the official Google Gen AI SDK on the server-side
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Format conversation history for Gemini API
      // Standard structure: array of objects with { role: 'user' | 'model', parts: [{ text: string }] }
      // The user messages might be sent as { sender: 'user' | 'bot', text: string } from client, so we map them:
      const formattedContents = messages.map((m: any) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const systemInstruction = `Eres el 'Concierge de Fruto Prohibido', un asistente personal altamente sofisticado, discreto, elegante y refinado para una boutique de bienestar íntimo de lujo en español.
Tus respuestas deben ser cálidas, sutiles, respetuosas, profesionales y orientadas al arte de la sensualidad, el placer y el bienestar. Evita caer en tonos vulgares, simplistas o excesivamente clínicos; adopta el lenguaje poético y lujoso de la alta perfumería, la moda exclusiva y el bienestar holístico.

Ayuda a los clientes con recomendaciones personalizadas sobre:
- Lencería (ajuste, elegancia, encajes, siluetas que empoderan).
- Feromonas (atracción magnética, mezcla con el pH natural, notas olfativas).
- Lubricantes premium (texturas de seda, base agua, aloe vera u orgánica, compatibilidad).
- Dispositivos de bienestar (tecnología subsónica, silencio, materiales premium de grado médico).
- Accesorios (antifaces de seda de morera de 22 momme, juegos de bondage elegantes con terciopelo fucsia).
- Garantías, absoluta discreción en envíos (cajas Kraft lisas, totalmente selladas, sin logos, remitente neutral).

Si te preguntan por un producto específico, descríbelo con suma elegancia y sensualidad. El catálogo de Fruto Prohibido incluye:
1. Éxtasis Minimal ($129.00 USD): Estimulador de ondas de aire subsónicas ultra silencioso, sumergible IPX7, silicona velvet.
2. Velvet Bondage Set ($85.00 USD): Arnés y esposas de cuero vegano suave con forro interior de terciopelo fucsia y acero inoxidable negro.
3. Trilogía Sensorial ($45.00 USD): Set de aceites esenciales de grado terapéutico (Deseo Salvaje, Paz Sagrada, Fuego Interno) para masajes de larga duración.
4. Antifaz de Seda Noir ($32.00 USD): Seda de morera de 22 Momme y encaje francés para estimulación sensorial.
5. Elixir de Atracción ($78.00 USD): Fragancia con feromonas activas, bergamota, orquídea negra y ámbar.
6. Body Dentelle Noir ($95.00 USD): Body de encaje elástico francés, escote en V profundo, cortes geométricos que enmarcan la silueta.
7. Gel de Seda Orgánico ($35.00 USD): Lubricante de aloe vera orgánico con PH balanceado y dispensador airless de 120ml. No mancha sábanas.
8. Vela de Soya Afrodita ($38.00 USD): Vela de soya aromática con pabilo de madera que se derrite a 38°C convirtiéndose en un tibio y untuoso aceite de masaje nutritivo.

Responde siempre en español. Mantén tus respuestas relativamente cortas, íntimas, sutiles y rodeadas de un aura de misterio pero sumamente serviciales. Jamás uses tecnicismos médicos fríos o palabras groseras; usa siempre metáforas refinadas del tacto, los aromas, el deseo y los sentidos.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: formattedContents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.8,
        }
      });

      const responseText = response.text || 'Mis disculpas, mi mente ha divagado en el placer por un instante. ¿En qué puedo asistirte hoy?';
      res.json({ text: responseText });
    } catch (error: any) {
      console.error('Error in Gemini Concierge:', error);
      res.status(500).json({ error: error.message || 'Error interno del servidor al procesar su solicitud.' });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Fruto Prohibido] Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
