import type { LoaderArgs } from "@remix-run/node";

import { emitter } from "@app/events";

import { eventStream } from "remix-utils";

export async function loader({ request }: LoaderArgs) {
  return eventStream(request.signal, function setup(send) {
    function handle() {
      send({ event: "message", data: Date.now().toString() });
    }

    emitter.on("message", handle);

    return function clear() {
      emitter.off("message", handle);
    };
  });
}
