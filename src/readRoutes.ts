import pt from 'path';
import { ISDEVELOPMENT} from './options';
import { IReadRecursive, IEvent } from './types';
import { getEventName, getMethodKey, getName } from './utils';

export default function readRoutes(files: IReadRecursive[]){
  const events: IEvent[] = []

  if (ISDEVELOPMENT) {
    console.log(
        "\x1b[36m",
        "\n[Function: ioRouter]:", '/socket',
        '\x1b[0m'
    );
  }

  for (const file of files) {
    const parse = pt.parse(file.relative)

    if (![".js", ".ts", ".ws"].includes(parse.ext.toLocaleLowerCase()) || parse.name.startsWith('_') || parse.dir.startsWith('/_') || parse.name.endsWith('.d'))
      continue

    const dir = parse.dir === "/" ? "" : parse.dir.substring(1).replace("/", ":")
    const name = getName(parse.name)

        const req = require(pt.join(file.path, file.name));
        const methods = Object.entries<(...args: any[]) => void>(req)
        
        for (const [method, handler]  of methods) {
          const methodKey = getMethodKey(method);
          const event = getEventName([dir , name , methodKey]);
 
          if (ISDEVELOPMENT) {
            console.log(`[${event}]`,"\r\t\t\t",  handler)
          }

        events.push({ event, handler })
      }
    
  }


  return events
}