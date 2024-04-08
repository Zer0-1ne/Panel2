import { exec } from 'child_process';

class ServerController {
  /**
   * Start a game server
   */
  static async startServer(serverId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      exec(`./scripts/start_server.sh ${serverId}`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Stop a game server
   */
  static async stopServer(serverId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      exec(`./scripts/stop_server.sh ${serverId}`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Create a backup of a game server
   */
  static async backupServer(serverId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      exec(`./scripts/backup_server.sh ${serverId}`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

export default ServerController;
