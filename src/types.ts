import { Namespace, Socket } from "socket.io";

export interface IReadRecursive {
  name: string
  relative: string
  path: string
}

export interface Handler {
  (...args: any[]) : void;
  socket?: Socket;
  io?: Namespace
}

export interface IEvent {
  event: string;
  handler: Handler;
}