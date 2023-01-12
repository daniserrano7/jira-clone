import type { LoaderArgs } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { emitter, EVENTS } from "@app/events";

export async function loader({ request }: LoaderArgs) {
  return eventStream(request.signal, (send) => {
    const handle = (message: string) => {
      send({ event: EVENTS.ISSUE_CHANGED, data: message });
    };

    emitter.on(EVENTS.ISSUE_CHANGED, handle);

    return () => emitter.off(EVENTS.ISSUE_CHANGED, handle);
  });
}
