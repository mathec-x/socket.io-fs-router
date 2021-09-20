import { Namespace, Server, Socket } from "socket.io";
import { REQUIRE_MAIN_FILE } from "./options";
import readRecursive from "./readRecursive";
import readRoutes from "./readRoutes";

const files = readRecursive(REQUIRE_MAIN_FILE+'/socket')
const routes = readRoutes(files)

export const ioRouter = (io: Namespace) => {
    return (socket: Socket, next: any) => {
        for (const { event, handler } of routes) {
            handler.prototype.io = io;
            handler.prototype.socket = socket;
            socket.on(event, (data) => new handler(data));
        }
        next()
    }
};

export function ioApi (this: Server ,socket: Socket, next: any) {
    for (const { event, handler } of routes) {
        socket.on(event, handler);
    }
    next()
};

export type { Handler } from './types'