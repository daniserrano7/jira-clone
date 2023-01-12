import type { ActionArgs } from "@remix-run/node";
import { useEffect } from "react";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { useDataRefresh, useEventSource } from "remix-utils";
import { getProjectsSummary, createProject } from "@infrastructure/db/project";
import { emitter } from "@app/events";

export async function loader() {
  const projects = await getProjectsSummary(
    "1c6855bf-9a0f-4a45-9641-7b7c7855c570"
  );
  return json({ projects });
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const message = formData.get("message") as string;

  console.log("MESSAGE: ", message);

  try {
    await createProject({
      name: message,
      description: "description",
      userIds: ["1c6855bf-9a0f-4a45-9641-7b7c7855c570"],
      image: "https://picsum.photos/200",
      categories: [],
    });

    emitter.emit("message", "4");

    return json(null, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return json({ error: error.message }, { status: 400 });
    }
    throw error;
  }
}

export default function Chat() {
  const loaderData = useLoaderData<typeof loader>();

  const { refresh } = useDataRefresh();
  const lastMessageId = useEventSource("/chat/suscribe", {
    event: "message",
  });

  console.log("LAST MESSAGE ID: ", lastMessageId);

  useEffect(() => refresh(), [lastMessageId]);

  return (
    <>
      <Form method="post">
        <label htmlFor="message">Message</label>
        <input type="text" name="message" id="message" required />
        <button>Send</button>
      </Form>

      <ul>
        {loaderData.projects.map((project) => {
          return <li key={project.id}>{project.name}</li>;
        })}
      </ul>
    </>
  );
}
