type LogLevel = "debug" | "info" | "warn" | "error";

class Logger {
  private isDevelopment = process.env.NODE_ENV === "development";

  private log(level: LogLevel, message: string, data?: Record<string, unknown>) {
    if (!this.isDevelopment && level === "debug") return;
    if (this.isDevelopment) {
      const logFn = console[level] ?? console.log;
      logFn(`[${level.toUpperCase()}] ${message}`, data ?? "");
    }
  }

  debug(message: string, data?: Record<string, unknown>) {
    this.log("debug", message, data);
  }

  info(message: string, data?: Record<string, unknown>) {
    this.log("info", message, data);
  }

  warn(message: string, data?: Record<string, unknown>) {
    this.log("warn", message, data);
  }

  error(message: string, data?: Record<string, unknown>) {
    this.log("error", message, data);
  }
}

export const logger = new Logger();
