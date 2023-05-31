import type { LoaderArgs } from "@remix-run/node";
import { eventStream } from "remix-utils";
import { emitter, EVENTS } from "@app/events";

export async function loader({ request }: LoaderArgs) {
  return eventStream(request.signal, (send) => {
    const handleIssueCreated = (message: string) => {
      send({ event: EVENTS.ISSUE_CREATED, data: message });
    };

    const handleIssueChanged = (message: string) => {
      send({ event: EVENTS.ISSUE_CHANGED, data: message });
    };

    const handleIssueDeleted = (message: string) => {
      send({ event: EVENTS.ISSUE_DELETED, data: message });
    };

    emitter.on(EVENTS.ISSUE_CREATED, handleIssueCreated);
    emitter.on(EVENTS.ISSUE_CHANGED, handleIssueChanged);
    emitter.on(EVENTS.ISSUE_DELETED, handleIssueDeleted);

    return () => {
      emitter.off(EVENTS.ISSUE_CHANGED, handleIssueChanged);
      emitter.off(EVENTS.ISSUE_CREATED, handleIssueCreated);
      emitter.off(EVENTS.ISSUE_DELETED, handleIssueDeleted);
    };
  });
}
