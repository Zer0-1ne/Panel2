import express from 'express';
import ServerController from '../controllers/ServerController';

const router = express.Router();

/**
 * Start a game server
 */
router.post('/start', async (req, res) => {
    const { serverId } = req.body;
  
    try {
      await ServerController.startServer(serverId);
      res.json({ success: true, message: 'Server started successfully' });
    } catch (error: any) {  // Explicitly typing 'error' as 'any'
      res.status(500).json({ success: false, message: 'Failed to start server', error: error.message });
    }
  });
  
  /**
   * Stop a game server
   */
  router.post('/stop', async (req, res) => {
    const { serverId } = req.body;
  
    try {
      await ServerController.stopServer(serverId);
      res.json({ success: true, message: 'Server stopped successfully' });
    } catch (error: any) {  // Explicitly typing 'error' as 'any'
      res.status(500).json({ success: false, message: 'Failed to stop server', error: error.message });
    }
  });
  
  /**
   * Create a backup of a game server
   */
  router.post('/backup', async (req, res) => {
    const { serverId } = req.body;
  
    try {
      await ServerController.backupServer(serverId);
      res.json({ success: true, message: 'Backup created successfully' });
    } catch (error: any) {  // Explicitly typing 'error' as 'any'
      res.status(500).json({ success: false, message: 'Failed to create backup', error: error.message });
    }
  });
  

export default router;
