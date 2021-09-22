import { Namespace, Socket } from "socket.io";

export interface IReadRecursive {
  name: string
  relative: string
  path: string
}

export interface Handler<T = any> {
  (this: Socket, ...args: T[]) : void;
}

export interface Router<T = any> {
  (this: {socket: Socket, io: Namespace}, ...args: T[]) : void;
}

export interface IEvent {
  event: string;
  handler: Handler;
}