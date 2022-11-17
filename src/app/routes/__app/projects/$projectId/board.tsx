import { Error500 } from "@app/components/error-500";
import { BoardView } from "@app/views/app/project/board";

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage = "The board page failed. Navigate to the projects page";

  return (
    <div className="flex h-full items-center justify-center">
      <Error500 message={errorMessage} href="board" />
    </div>
  );
}

export default function BoardRoute() {
  return <BoardView />;
}
