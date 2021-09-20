import { Namespace, Socket } from "socket.io";

export interface IReadRecursive {
  name: string
  relative: string
  path: string
}

export interface Handler<T = any> {
  (...args: T[]) : void;
  socket?: Socket;
  io?: Namespace
}

export interface IEvent {
  event: string;
  handler: Handler;
}